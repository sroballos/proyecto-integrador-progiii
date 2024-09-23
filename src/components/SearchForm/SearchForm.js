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
        this.props.history.push("/SearchResults/", {query: this.state.query})
    }

    render() {
        return (
        <div>
            <input onChange={(e)=> this.handleInputChange(e)} type="text" name="query" value={this.state.query} placeholder="Buscar película"/>
            <button onClick={()=> this.handleInputSubmit()} >Search Movie</button>
        
        </div>
        )
    }
}

export default SearchForm
