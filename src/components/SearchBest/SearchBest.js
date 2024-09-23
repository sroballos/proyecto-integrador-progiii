import React, { Component } from "react";
import MovieGrid from "../MovieGrid/MovieGrid"; 
import SearchForm from "../SearchForm/SearchForm";


export default class Mejores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      peliculasFiltradas: [],
      valorFiltrado: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=TU_API_KEY&language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          filteredMovies: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  handleFilterChange(event) {
    const value = event.target.value;
    this.setState({
        valorFiltrado: value,
        peliculasFiltradas: this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    });
  }

  render() {
    return (
      <div className="mejores">
        <h1>Mejores Películas</h1>
        <SearchForm value={this.state.valorFiltrado} onFilterChange={(e) => this.handleFilterChange(e)} />
        <MovieGrid movies={this.state.peliculasFiltradas} />
        {this.state.peliculasFiltradas.length === 0 && <p>No se encontraron películas.</p>}
      </div>
    );
  }
}