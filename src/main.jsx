import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import MovieOverview from '../src/movies/movie_overview.jsx'
import Header from './movies/header.jsx'
import Genremovies from './movies/genre.jsx'
import ApiDocs from './movies/apidocs.jsx'
import Popular from './movies/popular_movies.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchresult from './movies/Searchresult.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <Header />
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/popularmovies" element={<Popular />} />
      <Route path="/search_movies/:moviesname" element={<Searchresult />} />
      <Route path="/movie_overview/:movieId" element={<MovieOverview />} />
      <Route path="/genre/:genreID" element={<Genremovies />} />
      <Route path="/ApiDocs" element={<ApiDocs />} />
    </Routes> 
  </Router>
</React.StrictMode>
)
