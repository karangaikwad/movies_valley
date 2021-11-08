function Movie(props) {
  function handlechange(movieid) {
    // console.log(movieid);
    props.change(movieid);
  }
  return (
    <div className="container-fluid cont-fld"  >
    
      <div className="wrapper">
        {props.movies.results.map((movie) => {
          return (
            <img
              onClick={() => {
                handlechange(movie.id);
              }}
              key={movie.id}
              className="img1 zoom"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          );
        })}
      </div>
      </div>
    
  );
}
export default Movie;
