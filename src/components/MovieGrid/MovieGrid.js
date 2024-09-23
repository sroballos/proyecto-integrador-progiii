import { Component } from "react";
import "./MovieGrid.css";
import Movie from "../Movie/Movie";

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      limit: props.limit
    };
  }

  render() {

    console.log(this.state.movies)
    return (
      <section className="gridContainer">
        {this.state.movies.map((movie, idx) =>
          idx < this.state.limit ? (
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
        )
        }
      </section>
    );
  }
}

export default MovieGrid;
