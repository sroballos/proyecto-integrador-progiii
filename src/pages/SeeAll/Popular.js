import {Component} from "react";
import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import {options} from "../../options"
import Loader from "../../components/Loader/Loader"

export class Popular extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            limit: 6,
            movies: null,
            filteredMovies: [],
            filterValue: ""
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              movies: data.results,
              filteredMovies: data.results
            });
          })
          .catch((err) => console.log(err));
      }

    verMas(){
        this.setState({
            limit: this.state.limit + 3,
            actualPage: 1
        });

        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            movies: {} //this.state.movies.concat(data.results)
          });
        })
        .catch((err) => console.log(err));

    }


    handleFilterChange(e){
        const userValue= e.target.value

        this.setState({
            filterValue: userValue,
            filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
        })

    }

    render() {
        return (
            <>
            <input type="text" onChange= {(e)=> this.handleFilterChange(e)} value={this.state.filterValue}/>
            {this.state.movies == null ? <Loader /> : <><h1>Viendo {this.state.limit} películas</h1><button onClick={() => this.verMas()}>Ver Más</button><MovieGrid movies = {this.state.filteredMovies} limit = {this.state.limit} />
            <button onClick={() => this.verMas()}>Ver Más</button></>}
            
            </>
        )
    }
}

export default Popular
