//import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Component } from "react";


import "./MovieGrid.css"
import Movie from "../Movie/Movie";

//MovieGrid tiene que ser reutilizado en cada componente. Simplemente cambian los props que le pasamos.

class MovieGrid extends Component {
    constructor() {
        super()
        this.state = {
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
