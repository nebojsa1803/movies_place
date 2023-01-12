import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error-page'>
      <h1>PAGE NOT FOUND</h1>
      <Link to='/'>Back Home</Link>
    </div>
  )
}

export default ErrorPage
