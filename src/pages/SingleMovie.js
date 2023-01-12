import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import ErrorPage from './ErrorPage'
import { API_ENDPOINT } from './Home'
import img from './../images/no-image.png'

function SingleMovie() {
  const { id } = useParams()
  console.log(API_ENDPOINT)
  console.log(id)

  const [singleMovieData, setSingleMovieData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchSingleMovie = async () => {
    const response = await fetch(`${API_ENDPOINT}&i=${id}`)
    const data = await response.json()
    if (data.Response === 'False') {
      setErrorMessage(data.Error)
      setLoading(false)
    } else {
      setSingleMovieData(data)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchSingleMovie()
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    )
  }
  if (errorMessage) {
    return <ErrorPage errorMessage={errorMessage} />
  }

  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Genre: genre,
    Country: country,
  } = singleMovieData

  return (
    <div className='single-movie'>
      <div className='single-movie-img'>
        <img src={poster === 'N/A' ? img : poster} alt='' />
      </div>
      <div className='single-movie-data'>
        <h3>Title: {title}</h3>
        <h4>Year: {year}.</h4>
        <h4>Genre: {genre}</h4>
        <h4>Country: {country}</h4>
        <p>Plot: {plot}</p>
      </div>
    </div>
  )
}

export default SingleMovie
