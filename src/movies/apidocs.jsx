export default function ApiDocs() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 text-white">
      <h1 className="text-3xl text-center font-semibold mb-8">API Documentation</h1>
       
      <div className="mb-8 grid justify-center items-center p-5">

      <div className="mb-4 break-all">
            <h3 className="text-lg mb-2 font-extrabold">Search Movies by Name</h3>
            <p className="mb-2 italic">This API endpoint allows users to search for movies by their name.</p>
            <div className="flex flex-wrap mb-2"><h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/movie_name/movie_name" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/movie_name/movie_name</a>
            </div>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      
      <div className="mb-4 break-all">
            <h3 className="text-lg font-extrabold mb-2">Fetch Now Playing Movies</h3>
            <p className="mb-2 italic">Returns a list of currently playing movies.</p>
            <div className="flex flex-wrap mb-2"><h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies</a>
            </div>
            <p className="mb-2"><strong>Method:</strong> GET</p>
            <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
      </div>

      <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Find Movies by Genre</h3>
          <p className="mb-2 italic">Returns a list of movies based on a specific genre based on its ID.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/genre/{id}" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/genre/id</a>
          </div>
          <p className="mb-2"><strong>Method:</strong> GET</p>
          <p className="mb-2"><strong>Parameters:</strong> id (required): The ID of the genre.</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Get Movie Genre List</h3>
          <p className="mb-2 italic">Returns a list of movie genres.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/genre_list" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/genre_list</a>
          </div>
          <p className="mb-2"><strong>Method:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of genre names</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Get Popular Movies</h3>
          <p className="mb-2 italic">Returns a list of popular movies.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/popular" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/popular</a>
          </div>
          <p className="mb-2"><strong>Method:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Get Movie Details by ID</h3>
          <p className="mb-2 italic">Returns details of a movie based on its ID.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/details/{id}" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/details/id</a>
          </div>
          <p className="mb-2"><strong>Method:</strong> GET</p>
          <p className="mb-2"><strong>Parameters:</strong> id (required): The ID of the movie.</p>
          <p className="mb-2"><strong>Response:</strong> JSON object containing movie details</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Get Top Rated Movies</h3>
          <p className="mb-2 italic">Returns a list of top-rated movies.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v1/toprated_movies" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v1/toprated_movies</a>
          </div>
          <p className="mb-2"><strong>Method:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Get Home Page</h3>
          <p className="mb-2 italic">Returns a list of TV shows for the home page.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v2/tvshows" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v2/tvshows</a>
          </div>
          <p className="mb-2"><strong>METHOD:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Get TV Show Overview</h3>
          <p className="mb-2 italic">Returns an overview of a specific TV show.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/:id" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/:id</a>
          </div>
          <p className="mb-2"><strong>METHOD:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          <p className="mb-2"><strong>EXAMPLE:</strong> https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/12345</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Find TV Shows</h3>
          <p className="mb-2 italic">Search for TV shows based on a query string.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v2/find_tvshows/:search" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v2/find_tvshows/:search</a>
          </div>
          <p className="mb-2"><strong>METHOD:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          <p className="mb-2"><strong>EXAMPLE:</strong> GET https://movieapp-zyqr.onrender.com/api/v2/find_tvshows/avatar</p>
        </div>

        <div className="mb-4 break-all">
          <h3 className="text-lg font-extrabold mb-2">Find Movies and TV Shows</h3>
          <p className="mb-2 italic">Search for TV shows and Movies based on a query string.</p>
          <div className="flex flex-wrap mb-2">
            <h4 className="font-bold">URL:</h4>
            <a href="https://movieapp-zyqr.onrender.com/api/v2/all_series/:search_name" target="_blank" className="sm:pl-2 text-sky-600">https://movieapp-zyqr.onrender.com/api/v2/all_series/:search_name</a>
          </div>
          <p className="mb-2"><strong>METHOD:</strong> GET</p>
          <p className="mb-2"><strong>Response:</strong> JSON array of movie objects</p>
          <p className="mb-2"><strong>EXAMPLE:</strong> https://movieapp-zyqr.onrender.com/api/v2/all_series/avatar</p>
        </div>

     


      </div>



    </div>
  );
}
