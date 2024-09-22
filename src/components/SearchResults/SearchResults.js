import {Component} from "react";
import './SearchResults.css';
import MovieGrid from "../MovieGrid/MovieGrid";

export default class SearchResults extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    componentDidMount(){
        this.setState({
            isLoading:true,
        })
        fetch()
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
            //<div>SearchResults {this.props.location.state.query}</div>
            <div>
                {!this.state.isLoading ? (<MovieGrid movies= {this.state.movies}/>) : (<p>Loading</p>)}
            </div>
        )
    }
}



