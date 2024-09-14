import { Component } from "react";
import {options} from '../../options'

//import "./.css"

class MovieDetail extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    };

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=es&page=1', options)
        .then(response => response.json())
        .then(data => {console.log(data); this.setState({data:data.results})})
        .catch(err => console.error(err));
    }

    render() {
        return (
            <>
            <h2>Hola, soy el MovieDetail</h2>
            {this.state.data.length > 0 ? (
                <>
                    <h3>{this.state.data[4].title}</h3> 
                    <img src={`https://image.tmdb.org/t/p/w300${this.state.data[4].poster_path}`} alt='no'/>
                </>
                ) : (
                    <h3>Cargando...</h3>  
                )}


            </>
        );
    }
}

export default MovieDetail;
