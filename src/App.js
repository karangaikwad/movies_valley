import Movie from "./components/movie"
import {useEffect,useState} from "react";
function App() {
  // const upi_key = "73383b0925b8752ef9ebe0b1e141ec78";
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=73383b0925b8752ef9ebe0b1e141ec78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  const [movies,setMovies] = useState(null);
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
  
      setMovies(data) ;
    }
    
  },[]);
  console.log(movies);
  return (
    <>
    <div>
      {movies && <Movie movies = {movies}/>}
    </div>
    </>
  );
}

export default App;
