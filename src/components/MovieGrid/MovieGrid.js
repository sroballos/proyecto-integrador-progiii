import "./MovieGrid.css";
import Movie from "../Movie/Movie";

const MovieGrid = ({ movies, limit }) => {
  return (
    <section className="gridContainer">
      {movies.map((movie, idx) =>
        idx < limit ? (
          <Movie
            key={movie.id}
            title={movie.original_title}
            desc={movie.overview}
            img={movie.poster_path}
            id={movie.id}
          />
        ) : (
          ""
        )
      )}
    </section>
  );
};

export default MovieGrid;
