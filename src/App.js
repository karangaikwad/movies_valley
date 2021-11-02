import Movie from "./components/movie";
import { useEffect, useState } from "react";
function App() {
  // const upi_key = "73383b0925b8752ef9ebe0b1e141ec78";
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=73383b0925b8752ef9ebe0b1e141ec78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  const [movies, setMovies] = useState(null);
  const [movieid, setMovieid] = useState(null);
  const [element, setElement] = useState(null);
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();

      setMovies(data);
    }
    change();
    function change() {
      if (movieid !== null) {
        const ele = <div>Hello {movieid}</div>;
        setElement(ele);
      }
    }
  }, [movieid]);
  function changem(id) {
    setMovieid(id);
  }
  console.log(element);
  console.log(movies);
  return (
    <>
      <div>
        {movies && <Movie movies={movies} change={changem} />}
        {element && <h1 className="color1">{element}</h1>}
      </div>
    </>
  );
}

export default App;
