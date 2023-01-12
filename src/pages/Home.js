import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import Loading from '../components/Loading'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

function Home() {
  const [query, setQuery] = useState('')
  const [queryLengthForLabelPosition, setQueryLengthForLabelPosition] =
    useState(0)
  const [moviesArray, setMoviesArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios(`${API_ENDPOINT}&s=${query}`)
      const data = response.data
      if (data.Response === 'True') {
        setLoading(false)
        setMoviesArray(data.Search)
        console.log(data.Search)
      } else if (queryLengthForLabelPosition === 0) {
        setErrorMessage('')
        setLoading(false)
        setMoviesArray([])
      } else if (queryLengthForLabelPosition > 0 && data.Response !== 'True') {
        setLoading(true)
        setErrorMessage(data.Error)
        setMoviesArray([])
      } else {
        setErrorMessage(data.Error)
        setMoviesArray([])
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [query, moviesArray.length])

  return (
    <div className='home'>
      <div className='home-form'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            type='text'
            name='query'
            id='query'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setQueryLengthForLabelPosition(e.target.value.length)
            }}
          />
          {queryLengthForLabelPosition > 0 ? (
            <label htmlFor='query' style={{ top: '-15px' }}>
              Search Movie
            </label>
          ) : (
            <label htmlFor='query'>Search Movie</label>
          )}
        </form>
        {loading && <p>{errorMessage}</p>}
      </div>
      <div className='movies-list'>
        {loading === false ? (
          moviesArray.length > 0 &&
          moviesArray.map((movie) => {
            return <Movie key={movie.imdbID} {...movie} />
          })
        ) : (
          <div className='loading'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
