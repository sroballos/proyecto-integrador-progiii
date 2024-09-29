import { Component } from "react";
import "./SearchResults.css";
import MovieGrid from "../MovieGrid/MovieGrid";
import { options } from "../../options";
import Loader from "../../components/Loader/Loader";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(propsPrevios) {
    //el DidMount no se actualiza a menos que vuelvas a cargar el link
    if (propsPrevios.location.state.query !== this.props.location.state.query) {
      this.fetchMovies();
    }
  }

  fetchMovies() {
    const query = this.props.location.state.query.toLowerCase();

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="searchResults">
        <h3>Resultado de búsqueda de: {this.props.location.state.query}</h3>
        {this.state.movies === null ? (
          <Loader />
        ) : (
          <MovieGrid movies={this.state.movies} limit="10" />
        )}
      </div>
    );
  }
}

export default SearchResults;
