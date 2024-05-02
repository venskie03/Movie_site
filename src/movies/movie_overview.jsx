import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieOverview() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [movielink, setMovielink] = useState(``)

  const handlemovielink1 = () =>{
    if (movieDetails) {
      const cloudurl = `https://2embed.org/embed/movie/${movieDetails.id}`;
      setMovielink(cloudurl);
    }
  }

  const handlemovielink2 = () =>{
    if (movieDetails) {
      const cloudurl = `https://vidsrc.xyz/embed/movie/${movieDetails.id}`;
      setMovielink(cloudurl);
    }
  }

  const handlemovielink3 = () =>{
    if (movieDetails) {
      const cloudurl = `https://multiembed.mov/directstream.php?video_id=${movieDetails.id}&tmdb=1`;
      setMovielink(cloudurl);
    }
  }


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://movieapp-zyqr.onrender.com/api/v1/details/${movieId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    handlemovielink1();
  }, [movieDetails]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <div className="trailer-vid grid w-full">
        <iframe
          className="w-full h-96 md:h-[600px] border-2 border-red-500 rounded-md"
          src={movielink}
          title="fullmoovies video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
        <h1 className="text-center text-white mt-5 text-2xl">
          If current server doesn't work please try other servers below.
        </h1>
        <div className="srcs flex flex-wrap justify-center mt-10 gap-5 text-white">
          <button onClick={handlemovielink1} className="p-2 rounded-md w-28 flex justify-center border-2 border-red-500">
            <p className=" text-lg pr-2">
              <ion-icon name="play-circle"></ion-icon>
            </p>
            VidCloud
          </button>
          <button onClick={handlemovielink2} className="p-2 border-2 border-red-500 rounded-md w-28 flex justify-center">
            <p className=" text-lg pr-2">
              <ion-icon name="play-circle"></ion-icon>
            </p>{" "}
            Vidsrc
          </button>
          <button onClick={handlemovielink3} className="p-2 border-2 border-red-500 rounded-md w-36 flex justify-center">
            <p className=" text-lg pr-2">
              <ion-icon name="play-circle"></ion-icon>
            </p>{" "}
            SuperEmbed
          </button>
        </div>
      </div>

      <div className="movie-overview w-full flex flex-wrap justify-center items-center text-white py-20">
        <div className="p-4">
          <img
            className="w-80 h-auto rounded-md"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />
        </div>

        <div className="p-4 md:w-3/6">
          <h1 className="text-3xl">{movieDetails.original_title}</h1>
          <p className="mt-3 italic">{movieDetails.overview}</p>
          <p className="mt-2">
            Genre: {movieDetails.genres.map((genre) => genre.name).join(", ")}
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
                Production:{" "}
                {movieDetails.production_companies
                  .map((production) => production.name)
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
