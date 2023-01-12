import React from 'react'
import { Link } from 'react-router-dom'
import img from './../images/no-image.png'

function Movie({ imdbID: id, Title: title, Poster: poster, Year: year }) {
  return (
    <div className='card-box'>
      <div className='card-img'>
        <img src={poster === 'N/A' ? img : poster} alt='movie-poster' />
      </div>
      <div className='card-content'>
        <h3>Title: {title}</h3>
        <p>Year: {year}.</p>
        <Link to={`/movies/${id}`}>More Info</Link>
      </div>
    </div>
  )
}

export default Movie
