import {Component} from "react";
import './SearchResults.css';
import MovieGrid from "../MovieGrid/MovieGrid";


class SearchResults extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    render(){
        return(
           
            <div className="searchResults">
                <h3>Resultado de búsqueda de: {this.props.location.state.query}</h3>
                <MovieGrid  url={`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query.toLowerCase()}&include_adult=false&language=en-US&page=1`} limit = "10" />
                
            </div>
            
         
        )
    }
}

export default SearchResults 

