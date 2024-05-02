import  { useState, useEffect } from 'react';
import MovieSearch from './searchbar';

export default function NowPlaying() {
  const popularMovieUrl = "https://movieapp-zyqr.onrender.com/api/v1/popular";
  const [movies, setMovies] = useState([]);
  const [showplayIcon, setshowplayIcon] = useState("hidden");
  const [movieid, setMovieid] = useState("");
  const [error, setError] = useState(null);


  const showplayer = (indexid) =>{
    setshowplayIcon("flex");
    setMovieid(indexid);
  }

  const hideplayer = () =>{
    setshowplayIcon("hidden")
  }

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
      <MovieSearch/>
      <h1 className="text-white text-xl font-bold">Now Playing Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {movies.map(movie => (
          <div key={movie.id} className=" bg-gray-950 border-2 overflow-hidden border-red-500 text-white shadow-md rounded-md p-4 w-full grid justify-items-center">
            <a onMouseLeave={()=>{hideplayer()}} onMouseEnter={()=>{showplayer(movie.id)}} href={`/movie_overview/${movie.id}`} className="flex items-center justify-center w-44 h-60 rounded-md overflow-hidden">
      
            {movieid == movie.id ? <p className={`text-red-500 text-[70px] absolute text-center ${showplayIcon}`}><ion-icon name="play-circle"></ion-icon></p> : ''}
     
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="object-cover w-full h-full"
              />
            </a>
         
            <div className="text-gray-300">
              <h2 className="text-lg font-bold mt-2">{movie.original_title}</h2>
              <p className="mt-2 ">Popularity: {movie.popularity}</p>
              <p className="mt-2">Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
