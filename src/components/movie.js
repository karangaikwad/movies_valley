function Movie(props) {
  return (
    <>
      {/* {props.movies.results.map((movie) => {
        return <div key={movie.id}>



        </div>;
      })} */}
      <div>
        
         <img src={"https://image.tmdb.org/t/p/w500" + props.movies.results[2].poster_path}  />
         
      
      </div>
    </>
  );
}
export default Movie;
