import { useState, useEffect } from 'react';
import MovieSearch from './searchbar';

export default function Popular() {
  const popularMovieUrl = "https://movieapp-zyqr.onrender.com/api/v1/popular";
  const [pmovies, setPMovies] = useState([]);
  const [error, setError] = useState(null);
  const [movieid, setMovieid] = useState("");
  const [showplayIcon, setshowplayIcon] = useState("hidden");


  const showplayer = (indexid) =>{
    setshowplayIcon("flex");
    setMovieid(indexid);
  }

  const hideplayer = () =>{
    setshowplayIcon("hidden")
  }

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
    <div className="mt-5 grid justify-items-center w-full ">
      <MovieSearch/>
      <h1 className="text-xl font-bold mb-10 text-white">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 text-white p-4">
        {pmovies.map(movie => (
          <div key={movie.id} className="border-2 border-red-500 shadow-md rounded-md p-4 w-full grid justify-items-center">
            <a onMouseLeave={()=>{hideplayer()}} onMouseEnter={()=>{showplayer(movie.id)}} href={`/movie_overview/${movie.id}`} className="flex justify-center items-center w-44 h-60 rounded-md overflow-hidden">
            {movieid == movie.id ? <p className={`text-red-500 text-[70px] absolute text-center ${showplayIcon}`}><ion-icon name="play-circle"></ion-icon></p> : ''}
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="object-cover w-full h-full"
              />
            </a>
            <div className="text-gray-300">
              <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
              <p className="mt-2 ">Release Date: {movie.release_date}</p>
              <p className="mt-2 ">Vote Average: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
