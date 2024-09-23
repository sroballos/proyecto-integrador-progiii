import { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "",
      filteredMovies: props.movies
    };
  }

  handleFilterChange(e) {
    const filterValue = e.target.value.toLowerCase();
    const filteredMovies = this.props.movies.filter(movie =>
      movie.original_title.toLowerCase().includes(filterValue)
    );
    
    this.setState({
      filterValue: filterValue,
      filteredMovies: filteredMovies
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Filtrar películas..."
          value={this.state.filterValue}
          onChange={(e) => this.handleFilterChange(e)}
        />
        
        <MovieGrid movies={this.state.filteredMovies} limit={this.props.limit} />
      </div>
    );
  }
}

export default Filter;
