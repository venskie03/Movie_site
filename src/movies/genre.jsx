import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Genremovies() {
    const { genreID } = useParams();
  const popularMovieUrl = `https://movieapp-zyqr.onrender.com/api/v1/genre/${genreID}`;
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movies when the component mounts
    getApi();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const getApi = () => {
    fetch(popularMovieUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(json => {
        setMovies(json);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-5 grid justify-items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-white shadow-md rounded-md p-4 w-full grid justify-items-center">
            <a href={`/movie_overview/${movie.id}`} className="block w-44 h-60 rounded-md overflow-hidden">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="object-cover w-full h-full"
              />
            </a>
            <div className="">
              <h2 className="text-lg font-bold mt-2">{movie.original_title}</h2>
              <p className="mt-2 text-gray-600">Popularity: {movie.popularity}</p>
              <p className="mt-2 text-gray-600">Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

