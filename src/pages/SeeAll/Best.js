import {Component} from "react";
import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

export class Best extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            limit: 6
        }
    }

    verMas(){
        this.setState({
            limit: this.state.limit + 3,
        });
    }

    render() {
        return (
            <>
            {this.state.limit % 2 === 0 ? <><h1>Viendo {this.state.limit} películas</h1><button onClick={() => this.verMas()}>Ver Más</button><MovieGrid url={`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`} limit = {this.state.limit} /> </> : <><h1>Viendo {this.state.limit} películas impares</h1><button onClick={() => this.verMas()}>Ver Más</button><MovieGrid url={`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`} limit = {this.state.limit + 3} /></>}
            </>
        )
    }
}

export default Best
