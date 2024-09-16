import { Component } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Movie.css";

class Movie extends Component {
  constructor({ title, desc, img, id }) {
    super(title, desc, img, id);
    this.state = {
      title: title,
      desc: desc,
      img: img,
      id: id,
      hidden: true,
    };
  }

  hideHandler() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    return (
      <>
        {this.state.title == null ||
        this.state.desc == null ||
        this.state.img == null ||
        this.state.id == null ? (
          <Loader />
        ) : (
          <section className="movieContainer">
            <img
              src={`https://image.tmdb.org/t/p/w342/${this.state.img}.jpg`}
              alt={this.state.title}
            ></img>
            <h2 className = "title">{this.state.title}</h2>
            {this.state.hidden ? (
              <button onClick={() => this.hideHandler()}>
                Ver Descripción
              </button>
            ) : (
              <>
                <button onClick={() => this.hideHandler()}>
                  Ocultar Descripción
                </button>
                <p>{this.state.desc}</p>
              </>
            )}
            <Link to={`/detail/${this.state.id}`}>
              <button>Ir a Detalle</button>
            </Link>
            <button>Agregar / Quitar de Favoritos</button>
          </section>
        )}
      </>
    );
  }
}

export default Movie;
