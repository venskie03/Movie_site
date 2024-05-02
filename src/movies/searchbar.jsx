import { useState } from 'react';


export default function MovieSearch() {

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };



  return (
    <>
    <div className="container grid mx-auto py-8 justify-center items-center">
      <h1 className="text-3xl text-center font-semibold mb-4 text-white">Find Movies, TV shows and more</h1>
      <div className="mb-4 flex flex-col md:flex-row items-center justify-center p-4">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchQuery} 
          onChange={handleSearchInputChange} 
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto mb-2 md:mb-0 md:mr-2"
        />
        <a href={`/search_movies/${searchQuery}`} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-md">
          Search
        </a>
      </div>
    </div>
   
   </>
  );
}
