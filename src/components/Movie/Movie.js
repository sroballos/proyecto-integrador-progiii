import { Component } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Movie.css";

class Movie extends Component {
  constructor({ title, desc, img, id }) {
    super();
    this.state = {
      title: title,
      desc: desc,
      img: img,
      id: id,
      esFavorito: false,
      hidden: true,
    };
  }

  agregarFavorito() {
    const storage = localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedArray = JSON.parse(storage); // ahora está en formato JS
      parsedArray.push(this.props.id); // con esto lo guardamos
      const stringArray = JSON.stringify(parsedArray); // lo convierte
      localStorage.setItem('favoritos', stringArray); // le paso el nombre del dato que quiero guardar, y el dato
    } else {
      const primerMovie = [this.props.id];
      const stringArray = JSON.stringify(primerMovie); // lo convierte
      localStorage.setItem('favoritos', stringArray); // le paso el nombre del dato que quiero guardar, y el dato
    }
    this.setState({
      esFavorito: true
    });
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      const estaEnFavoritos = parsedArray.includes(this.props.id); // esto devuelve true o false
      this.setState({
        esFavorito: estaEnFavoritos // true o false
      });
    }
  }

  sacarFavorito() {
    const storage = localStorage.getItem('favoritos');
    const parsedArray = JSON.parse(storage); // ahora está en formato JS
    // tengo que ver si tengo el id de una película para ver si está o no en favoritos
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.id);
    const stringArray = JSON.stringify(favoritosRestantes); // lo convierte
    localStorage.setItem('favoritos', stringArray); // le paso el nombre del dato que quiero guardar, y el dato
    this.setState({
      esFavorito: false
    });
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
            <h2 className="title">{this.state.title}</h2>
            {this.state.hidden ? (
              <button onClick={() => this.hideHandler()}>Ver Descripción</button>
            ) : (
              <>
                <button onClick={() => this.hideHandler()}>
                  Ocultar Descripción
                </button>
                <p>{this.state.desc}</p>
              </>
            )}
            <Link className='esteLinkMolestaAlCss' to={`/detail/${this.state.id}`}>
              <button>Ir a Detalle</button>
            </Link>
            <button onClick={() =>
              this.state.esFavorito ? this.sacarFavorito() : this.agregarFavorito()
            }>
              {!this.state.esFavorito ? 'Agregar a Favoritos' : 'Sacar de Favoritos'}
            </button>
          </section>
        )}
      </>
    );
  }
}

export default Movie;
