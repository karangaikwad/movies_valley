function Movie(props) {
  return (
    <div class="outer-wrapper">
  
  

    <div class="wrapper" >
    
     

      {props.movies.results.map((movie) => {
        return (
          <img class="zoom"
            key={movie.id}
            className="img1"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          />
        );
      })}
    </div>
    </div>
  );
}
export default Movie;
