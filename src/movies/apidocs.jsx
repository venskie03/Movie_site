import React from 'react';

export default function ApiDocs() {
  return (
    <div className="flex justify-center">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">API Documentation - Version 1</h1>

      
      {/* Search Movies by Name */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Search Movies by Name</h2>
        <p className="mb-2">This API endpoint allows users to search for movies by their name.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/movie_name/{movie_name}" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/movie_name/movie_name</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      {/* Fetch Now Playing Movies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Fetch Now Playing Movies</h2>
        <p className="mb-2">Returns a list of currently playing movies.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      {/* Find Movies by Genre */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Find Movies by Genre</h2>
        <p className="mb-2">Returns a list of movies based on a specific genre based on its ID.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/genre/{id}" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/genre/id</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Parameters:</strong> id (required): The ID of the genre.</p>
        <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      {/* Get Movie Genre List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Get Movie Genre List</h2>
        <p className="mb-2">Returns a list of movie genres.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/genre_list" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/genre_list</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Response:</strong> JSON array of genre names</p>
      </div>

      {/* Get Popular Movies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Get Popular Movies</h2>
        <p className="mb-2">Returns a list of popular movies.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/popular" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/popular</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      {/* Get Movie Details by ID */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Get Movie Details by ID</h2>
        <p className="mb-2">Returns details of a movie based on its ID.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/details/{id}" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/details/id</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Parameters:</strong> id (required): The ID of the movie.</p>
        <p className="mb-2"><strong>Response:</strong> JSON object containing movie details</p>
      </div>

      {/* Get Top Rated Movies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Get Top Rated Movies</h2>
        <p className="mb-2">Returns a list of top-rated movies.</p>
        <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/toprated_movies" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/toprated_movies</a></p>
        <p className="mb-2"><strong>Method:</strong> GET</p>
        <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      {/* Additionally */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">ADDITIONALLY</h2>
        <p className="mb-2">FETCHING FULLMOVIE URL AND PROFILE PICTURE OF THE MOVIE USE THIS SAMPLE</p>
        <div className="mb-2">Fetching Profile of the Movie:</div>
        <p>https://image.tmdb.org/t/p/w500 + poster_path</p>
        <div className="mb-2">Fetching full Movie:</div>
        <p>https://vidsrc.xyz/embed/movie/ + movie id</p>
      </div>
    </div>
  </div>
  );
}
