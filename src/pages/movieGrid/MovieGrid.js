import { Component } from "react";

import Movie from "../movie/Movie"
import "./movieGrid.css"

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
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </section>
        );
    }
}

export default MovieGrid;
