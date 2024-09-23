import React, { Component } from "react";
import MovieGrid from "../MovieGrid/MovieGrid"; 
import SearchForm from "../SearchForm/SearchForm";
 

export default class SearchPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      peliculasFiltradas: [],
      valorFiltrado: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          peliculasFiltradas: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  handleFilterChange(event) {
    const value = event.target.value;
    this.setState({
      filterValue: value,
      filteredMovies: this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    });
  }


  render() {
    return (
      <div>
        <h1>Películas Populares</h1>
        <SearchForm value={this.state.valorFiltrado} onFilterChange={this.handleFilterChange} />
        <MovieGrid movies={this.state.peliculasFiltradas} />
        {this.state.peliculasFiltradas.length === 0 && <p>No se encontraron películas.</p>}
      </div>
    );
  }
}