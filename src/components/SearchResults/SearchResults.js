import {Component} from "react";
import './SearchResults.css';
import MovieGrid from "../MovieGrid/MovieGrid";
import { options } from "../../options";

export default class SearchResults extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    componentDidMount(){

        const search = this.props.location.search;
        const query = //¿Cómo obtengo la query de la URL?

        this.setState({ 
            isLoading:true,
        })

        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}`, options)
        .then((response) => response.json())
        .then((data) =>{
            this.setState({
                movies: data.results,
                isLoading:false,
            })
        })
        .catch((error)=> console.log(error))
    }

    render(){
        return(
           
            <div>Resultado de buscqueda de:{this.props.location.state.query}
                {!this.state.isLoading ? (<MovieGrid movies= {this.state.movies}/>) : (<p>Loading</p>)}
            </div>
         
        )
    }
}



