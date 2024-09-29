import { Component } from "react";
import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { options } from "../../options";
import Loader from "../../components/Loader/Loader";

export class Best extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 20,
      movies: [],
      actualPage: 1,
      filteredMovies: [],
      filterValue: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.actualPage}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          actualPage: this.state.actualPage + 1,
          filteredMovies: data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  verMas() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.actualPage}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: this.state.movies.concat(data.results),
          actualPage: this.state.actualPage + 1,
          limit: this.state.limit + 20,
        });
      })
      .catch((err) => console.log(err));
  }

  handleFilterChange(e) {
    const userValue = e.target.value;

    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
      ),
    });
  }

  handleResetFilter() {
    this.setState({
      filterValue: "",
      filteredMovies: this.state.movies,
    });
  }

  render() {
    return (
      <>
        {this.state.movies == null ? (
          <Loader />
        ) : (
          <>
            <h2>POPULAR</h2>
            <input
              type="text"
              onChange={(e) => this.handleFilterChange(e)}
              value={this.state.filterValue}
            />
            <button className="reset" onClick={() => this.handleResetFilter()}>
              Reset Filter
            </button>
            <button onClick={() => this.verMas()}>Ver Más</button>
            <MovieGrid
              movies={this.state.filteredMovies}
              limit={this.state.limit}
            />
          </>
        )}
      </>
    );
  }
}

export default Best;
