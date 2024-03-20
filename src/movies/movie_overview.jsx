import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieOverview() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://movieapp-zyqr.onrender.com/api/v1/details/${movieId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();

  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="trailer-vid w-full">
        <iframe
          className="w-full h-96 md:h-[600px]"
          src={movieDetails.fullmovieurl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="movie-overview mt-5 mb-5 flex flex-col md:flex-row items-center md:text-start text-center justify-center md:mx-0 mx-8">
        <div className="md:w-1/3">
          <img
            className="w-80 h-auto rounded-md"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />
        </div>
        <div>
          <h1 className="text-3xl">{movieDetails.original_title}</h1>
          <p className="mt-3">{movieDetails.overview}</p>
          <p className="mt-2">
            Genre: {movieDetails.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className="mt-1">Released Date: {movieDetails.release_date}</p>
          <p className="mt-1">Duration: {movieDetails.runtime} minutes</p>
          <div>
            <div className="w-full md:w-1/2">
              <p className="">Popularity: {movieDetails.popularity}</p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="mt-1">Language: {movieDetails.original_language}</p>
            </div>
            <div className="w-full">
              <p className="mt-1">
                Production:{' '}
                {movieDetails.production_companies
                  .map((production) => production.name)
                  .join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
