import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Movie from './pages/Movie'
import ErrorPage from './pages/ErrorPage'
import SingleMovie from './pages/SingleMovie'
import SharedLayout from './pages/SharedLayout'

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='movies/:id' element={<SingleMovie />} />
          <Route path='about' element={<About />} />

          <Route path='*' element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
