import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Searchmovies from '../src/movies/searchbar.jsx'
import MovieOverview from '../src/movies/movie_overview.jsx'
import Header from './movies/header.jsx'
import Genremovies from './movies/genre.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <Header />
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/search_movies" element={<Searchmovies />} />
      <Route path="/movie_overview/:movieId" element={<MovieOverview />} />
      <Route path="/genre/:genreID" element={<Genremovies />} />
    </Routes> 
  </Router>
</React.StrictMode>
)
