import {Component} from "react";
import './SearchResults.css';

export default class SearchResults extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>SearchResults {this.props.location.state.query}</div>
        )
    }
}