import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function SharedLayout() {
  return (
    <div className='main'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
