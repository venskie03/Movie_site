import { useState } from 'react';
import Nowplaying from './nowplaying'
import Popular from './popular_movies'
export default function MovieSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isGenreHovered, setIsGenreHovered] = useState(true);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://movieapp-zyqr.onrender.com/api/v1/movie_name/${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchResults(data);
      setError(null);
    } catch (error) {
      setSearchResults([]);
      setError('Error: Failed to fetch data');
    }
  };

  return (
    <>
    <div className="container grid mx-auto py-8 justify-center items-center">
      <h1 className="text-3xl text-center font-semibold mb-4">Find Movies, TV shows and more</h1>
      <form onSubmit={handleSearchSubmit} className="mb-4 flex flex-col md:flex-row items-center justify-center">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchQuery} 
          onChange={handleSearchInputChange} 
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto mb-2 md:mb-0 md:mr-2"
        />
        <button type="submit" onClick={() => setIsGenreHovered(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
      {Array.isArray(searchResults) && searchResults.map(movie => (
            <a href={`/movie_overview/${movie.id}`} key={movie.id}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  className="w-full mb-4 rounded-md" 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                />
                <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{movie.release_date}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
   <div className={`list ${isGenreHovered ? "" : "hidden"}`}>
   <Nowplaying/>
   <Popular/>
   </div>
   </>
  );
}
