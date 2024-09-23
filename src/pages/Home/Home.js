import { Component } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../../components/Loader/Loader"
import "./Home.css";
import {options} from "../../options"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: null,
      bestMovies: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          popularMovies: data.results,
        });
      })
      .catch((err) => console.log(err));

      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            bestMovies: data.results,
          });
        })
        .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h3 className="intro">Más Populares</h3>
        <Link to="/popular">
          <button className="verTodas">Ver Todas</button>
        </Link>
        {this.state.popularMovies == null ? <Loader /> : <><MovieGrid
          movies = {this.state.popularMovies}
          limit="5"
        /></>}
        

        <h3 className="intro">Top Rated</h3>
        <Link to="/toprated">
          <button className="verTodas">Ver Todas</button>
        </Link>

        {this.state.bestMovies == null ? <Loader /> : <><MovieGrid
          movies = {this.state.bestMovies}
          limit="5"
        /></>}
      </>
    );
  }
}

export default Home;
