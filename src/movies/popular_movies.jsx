import { useState, useEffect } from 'react';

export default function Popular() {
  const popularMovieUrl = "https://movieapp-zyqr.onrender.com/api/v1/popular";
  const [pmovies, setPMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch popular movies when the component mounts
    getPopularMovies();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const getPopularMovies = () => {
    fetch(popularMovieUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(json => {
        setPMovies(json);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-5 grid justify-items-center w-full mt-32">
      <h1 className="text-xl font-bold mb-10">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {pmovies.map(movie => (
          <div key={movie.id} className="bg-white shadow-md rounded-md p-4 w-full grid justify-items-center">
            <a href={`/movie_overview/${movie.id}`} className="block w-44 h-60 rounded-md overflow-hidden">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="object-cover w-full h-full"
              />
            </a>
            <div className="">
              <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
              <p className="mt-2 text-gray-600">Release Date: {movie.release_date}</p>
              <p className="mt-2 text-gray-600">Vote Average: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
