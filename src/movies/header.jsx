import { useState, useEffect } from "react";

export default function Header() {
  const [genreResults, setGenreResults] = useState([]);
  const [error, setError] = useState(null);
  const [isGenreHovered, setIsGenreHovered] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // New state variable for navbar visibility
  const genrelisturl = "https://movieapp-zyqr.onrender.com/api/v1/genre_list";
  const [isiconvisible, setisiconvisible] = useState(true);

  const [iscloseiconvisible, setcloseisiconvisible] = useState(false);

  useEffect(() => {
    // Fetch genre list when the component mounts
    getGenreList();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const getGenreList = () => {
    fetch(genrelisturl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(json => {
        setGenreResults(json);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    setIsGenreHovered(false); 
    setisiconvisible(false)
    setcloseisiconvisible(true)
  };

  const closenavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    setIsGenreHovered(false); 
    setisiconvisible(true)
    setcloseisiconvisible(false)
  };

  const saveGenrename = (genrename) => {
    const savedGenrename = localStorage.getItem("Genre_name")
    if(!savedGenrename){
      try {
        localStorage.setItem("Genre_name", genrename);
        console.log("Genre name saved:", genrename);
      } catch (error) {
        console.error("Error saving genre name:", error);
      }
    }else{
      localStorage.removeItem("Genre_name", genrename);
      localStorage.setItem("Genre_name", genrename);
    }
  }
  return (
    <>
      <header className="bg-gray-950 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className=" flex text-red-500 font-bold">
            <div className="mt-1 hidden md:flex text-4xl"><ion-icon name="videocam-outline"></ion-icon></div>
            <a className="md:ml-2 md:mt-2.5 font-extrabold" href="/">PHFLIX</a>
          </h1>
          <nav className={`md:block ${isNavbarVisible ? "md:static absolute md:mt-0 mt-64 grid text-center bg-black w-full h-fit left-0" : "hidden"}`}>
            <ul className="md:flex">
              <li className="p-3 ">
              <a href="/" className="text-white border-b-2 border-transparent transition ease-in-out duration-300 hover:border-red-500 hover:text-red-500 hover:border-opacity-100 hover:delay-100">Home</a>

              </li>
              <li className="p-3">
                <a
                  href="#"
                  className="text-white border-b-2 border-transparent transition ease-in-out duration-300 hover:border-red-500 hover:text-red-500 hover:border-opacity-100 hover:delay-100"
                  onMouseEnter={() => setIsGenreHovered(true)}
                  onClick={() => { setIsGenreHovered(true); setIsNavbarVisible(false); }}
                >
                  Genre
                </a>
              </li>
              <li className="p-3 ">
                <a href="/popularmovies" className="text-white border-b-2 border-transparent transition ease-in-out duration-300 hover:border-red-500 hover:text-red-500 hover:border-opacity-100 hover:delay-100">Popular Movies</a>
              </li>
              <li className="p-3">
                <a href="/ApiDocs" className="text-white border-b-2 border-transparent transition ease-in-out duration-300 hover:border-red-500 hover:text-red-500 hover:border-opacity-100 hover:delay-100">API Docs</a>
              </li>
              <li className="p-3">
                <a href="https://kevinkyleganados.netlify.app/" target="_blank" className="text-white border-b-2 border-transparent transition ease-in-out duration-300 hover:border-red-500 hover:text-red-500 hover:border-opacity-100 hover:delay-100">Contact Me!</a>
              </li>
         
            </ul>
          </nav>
         
          <div className="md:hidden block">
            <button className={`text-white text-2xl ${isiconvisible ? "" : "hidden"}`} onClick={toggleNavbar}>
            <ion-icon name="menu-outline"></ion-icon>
            </button>
            <button className={`text-white text-2xl ${iscloseiconvisible ? "" : "hidden"}`}  onClick={closenavbar}>
            <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </div>
      </header>
      <div className={`list ${isGenreHovered ? "" : "hidden"} w-full md:w-[90%] mx-auto mt-5`}>
        <h1 className="text-center mb-2 text-lg">Select Genre Below</h1>
        <div className="genre-container flex flex-wrap gap-5 justify-center ease-in-out delay-300">
          {genreResults.map(genre => (
            <div onClick={()=>{saveGenrename(genre.name)}} className="genre-item cursor-pointer hover:bg-red-400 bg-red-500 text-white rounded-md p-3 text-center w-32 md:w-auto" key={genre.id}>
              <a href={`/genre/${genre.id}`}>{genre.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
