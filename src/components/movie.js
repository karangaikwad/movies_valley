function Movie(props) {
  return (
    <div>
      {props.movies.results.map((movie) => {
        return (
          <img
            key={movie.id}
            className="img1"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          />
        );
      })}
    </div>
  );
}
export default Movie;
