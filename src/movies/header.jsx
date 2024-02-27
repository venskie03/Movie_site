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

  return (
    <>
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-white flex text-yellow-300 font-bold">
            <div className="mt-1 hidden md:flex text-4xl"><ion-icon name="videocam-outline"></ion-icon></div>
            <a className="md:ml-2 md:mt-2" href="/">Movie App</a>
          </h1>
          <nav className={`md:block ${isNavbarVisible ? "md:static absolute md:mt-0 mt-64 grid text-center bg-black w-full h-fit left-0" : "hidden"}`}>
            <ul className="md:flex">
              <li className="p-3 bg-gray-800">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
              </li>
              <li className="p-3 bg-gray-800">
                <a
                  href="#"
                  className="genre text-white hover:text-gray-300"
                  onMouseEnter={() => setIsGenreHovered(true)}
                  onClick={() => { setIsGenreHovered(true); setIsNavbarVisible(false); }}
                >
                  Genre
                </a>
              </li>
              <li className="p-3 bg-gray-800">
                <a href="#" className="text-white hover:text-gray-300">Popular Movies</a>
              </li>
              <li className="p-3 bg-gray-800">
                <a href="#" className="text-white hover:text-gray-300">API DOCS</a>
              </li>
            </ul>
          </nav>
          <div className="text-yellow-300 hidden md:flex md:pr-10">Login</div>
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
        <div className="genre-container flex flex-wrap gap-5 justify-center">
          {genreResults.map(genre => (
            <div className="genre-item cursor-pointer hover:bg-yellow-300 bg-gray-200 rounded-md p-3 text-center w-32 md:w-auto" key={genre.id}>
              <a href={`/genre/${genre.id}`}>{genre.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
