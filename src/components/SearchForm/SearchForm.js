import {Component} from "react";
import "./SearchForm.css"

export class SearchForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
    }

    handleInputChange(e){
        this.setState({
            query: e.target.value
        })
    }

    handleInputSubmit(e){
        e.preventDefault();
        if (this.state.query !== "") { 
            this.props.history.push({
                pathname: "/SearchResults",
                state: { query: this.state.query }
            });
        }
    }

    render() {
        return (
        <div>
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <input onChange={(e)=> this.handleInputChange(e)} type="text" name="query" value={this.state.query} placeholder="Buscar película"/>
                <button className= "searchButton" onClick={()=> this.handleInputSubmit()} >Search Movie</button>
            </form>
        
        </div>
        )
    }
}

export default SearchForm
