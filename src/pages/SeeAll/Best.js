import {Component} from "react";
import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import {options} from "../../options"
import Loader from "../../components/Loader/Loader"

export class Best extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            limit: 6,
            movies: null,
            actualPage: 1
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.actualPage}`, options)
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              movies: data.results,
              actualPage: this.state.actualPage + 1
            });
          })
          .catch((err) => console.log(err));
      }

    verMas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.actualPage}`, options)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            movies: this.state.movies.concat(data.results),
            actualPage: this.state.actualPage + 1
          });
          console.log(this.state.movies)
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <>
            {this.state.movies == null ? <Loader /> : <><h2>TOP RATED</h2>
            <button onClick={() => this.verMas()}>Ver Más</button> <h2>{this.state.actualPage}</h2>
            <MovieGrid movies = {this.state.movies} limit = "100"/></>}
            </>
        )
    }
}

export default Best
