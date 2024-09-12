import { Component } from "react";


import "./MovieGrid.css"
import Movie from "../Movie/Movie";

class MovieGrid extends Component {
    constructor() {
        super()
        this.setState = {
            test: 0
        };
    }
    render() {
        return (
            <section className="gridContainer">
                <Movie/>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </section>
        );
    }
}

export default MovieGrid;
