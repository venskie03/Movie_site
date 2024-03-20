import React from 'react';

export default function ApiDocs() {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">API Documentation</h1>

        {/* Movie API Documentation - Version 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Movie API Documentation - Version 1</h2>

          {/* Search Movies by Name */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Search Movies by Name</h3>
            <p className="mb-2">This API endpoint allows users to search for movies by their name.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/movie_name/{movie_name}" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/movie_name/movie_name</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          </div>

          {/* Fetch Now Playing Movies */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Fetch Now Playing Movies</h3>
            <p className="mb-2">Returns a list of currently playing movies.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          </div>

          {/* Find Movies by Genre */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Find Movies by Genre</h3>
            <p className="mb-2">Returns a list of movies based on a specific genre based on its ID.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/genre/{id}" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/genre/id</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Parameters:</strong> id (required): The ID of the genre.</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          </div>

          {/* Get Movie Genre List */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Movie Genre List</h3>
            <p className="mb-2">Returns a list of movie genres.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/genre_list" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/genre_list</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of genre names</p>
          </div>

          {/* Get Popular Movies */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Popular Movies</h3>
            <p className="mb-2">Returns a list of popular movies.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/popular" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/popular</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          </div>

          {/* Get Movie Details by ID */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Movie Details by ID</h3>
            <p className="mb-2">Returns details of a movie based on its ID.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/details/{id}" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/details/id</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Parameters:</strong> id (required): The ID of the movie.</p>
            <p className="mb-2"><strong>Response:</strong> JSON object containing movie details</p>
          </div>

          {/* Get Top Rated Movies */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Top Rated Movies</h3>
            <p className="mb-2">Returns a list of top-rated movies.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v1/toprated_movies" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v1/toprated_movies</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          </div>

        </div>

        {/* TV Shows API Documentation - Version 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">TV Shows API Documentation - Version 2</h2>

          {/* Get Home Page */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Home Page</h3>
            <p className="mb-2">Returns a list of TV shows for the home page.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v2/tvshows" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v2/tvshows</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of TV show objects</p>
          </div>

          {/* Get TV Show Overview */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get TV Show Overview</h3>
            <p className="mb-2">Returns an overview of a specific TV show.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/:id" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/:id</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON object containing TV show details</p>
            <p className="mb-2"><strong>EXAMPLE:</strong> <code>https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/12345</code></p>
          </div>

          {/* Find TV Shows */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Find TV Shows</h3>
            <p className="mb-2">Search for TV shows based on a query string.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v2/find_tvshows/:search" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v2/find_tvshows/:search</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of TV show objects</p>
            <p className="mb-2"><strong>EXAMPLE:</strong> <code>GET https://movieapp-zyqr.onrender.com/api/v2/find_tvshows/avatar</code></p>
          </div>

          {/* Find Movies and TV Shows */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Find Movies and TV Shows</h3>
            <p className="mb-2">Search for TV shows and movies based on a query string.</p>
            <p className="mb-2"><strong>URL:</strong> <a href="https://movieapp-zyqr.onrender.com/api/v2/all_series/:search_name" className="text-blue-500">https://movieapp-zyqr.onrender.com/api/v2/all_series/:search_name</a></p>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of TV show and movie objects</p>
            <p className="mb-2"><strong>EXAMPLE:</strong> <code>https://movieapp-zyqr.onrender.com/api/v2/all_series/avatar</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}