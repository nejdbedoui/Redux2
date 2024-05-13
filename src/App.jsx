import { useState } from 'react'
import './App.css'
import {  Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Movies from './Component/movies'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/navigationBar'
import Notfound from './Component/notfound'
import MoviesDetails from './Component/movieDetails'
import Wishlist from './Component/wishlist'


function App() {

  return (
    <>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/details/:id" element={<MoviesDetails/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
