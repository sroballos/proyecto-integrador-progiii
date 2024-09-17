import {Component} from "react";

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

    handleInputSubmit(){
        this.props.history.push("/search", {query:this.state.query})
    }

    render() {
        return (
        <div>
            <input onChange={()=> this.handleInputChange(e)} type="text" name="query" value={this.state.query}/>
            <button onClick={()=> this.handleInputSubmit()} >Search Movie</button>
        </div>
        )
    }
}

export default SearchForm
