import { Component } from "react";
import "./MovieGrid.css";
import Movie from "../Movie/Movie";
import Loader from "../../components/Loader/Loader";
import { options } from "../../options";


class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      movies: [],
      limit: Number(props.limit),
    };
  }

  componentDidMount() {
    fetch(this.state.url, options)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="gridContainer">
        {this.state.movies.length == 0 ? (
          <Loader />
        ) : (
          this.state.movies.map((movie, idx) =>
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
        )}

      </section>
    );
  }
}

export default MovieGrid;
