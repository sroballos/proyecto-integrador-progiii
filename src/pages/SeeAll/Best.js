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
            movies: null
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              movies: data.results
            });
          })
          .catch((err) => console.log(err));
      }

    verMas(){
        this.setState({
            limit: this.state.limit + 3,
            actualPage: 1
        });

        fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            movies: {} //this.state.movies.concat(data.results)
          });
        })
        .catch((err) => console.log(err));

    }

    render() {
        return (
            <>
            {this.state.movies == null ? <Loader /> : <><h1>Viendo {this.state.limit} películas</h1><button onClick={() => this.verMas()}>Ver Más</button><MovieGrid movies = {this.state.movies} limit = {this.state.limit} />
            <button onClick={() => this.verMas()}>Ver Más</button></>}
            
            </>
        )
    }
}

export default Best
