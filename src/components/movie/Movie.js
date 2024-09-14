import { Component } from "react";

import "./Movie.css"

class Movie extends Component {
    constructor() {
        super()
        this.setState = {
            test: 1
        }
    }
    render() {
        return (
            <section className="movieContainer">
                <img alt='a'></img>
                <h2>Título</h2>
                <button>Ver Descripción</button>
                <p>Descripción</p>
                <button>Ir a Detalle</button>
                <button>Agregar / Quitar de Favoritos</button>
            </section>
        );
    }
}

export default Movie;
