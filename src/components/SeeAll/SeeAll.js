//import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Component } from "react";

import Movie from "../Movie/Movie";
import Loader from "../../components/Loader/Loader"
import { options } from "../../options";


class SeeAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      movies: null,
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            movies: data.results
        })
        console.log(data)
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="gridContainer">
        {this.state.movies == null ? <Loader /> : this.state.movies.map((movie, idx) => <Movie title = {movie.original_title} desc = {movie.overview} img = {movie.poster_path} id = {movie.id} />)}
      </section>
    );
  }
}

export default SeeAll;
