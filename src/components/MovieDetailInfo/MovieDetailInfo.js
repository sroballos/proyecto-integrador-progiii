import { Component } from "react";
import { options } from "../../options";

import "./MovieDetailInfo.css";
import Loader from "../Loader/Loader";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      esFavorito: false
    };
  }
  
  //misma lógica que en Movie para agregar una pelicula a favoritos
  agregarFavorito() {
    
    const storage = localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedArray = JSON.parse(storage); // ahora está en formato JS
      parsedArray.push(Number(this.props.id)); // con esto lo guardamos, por alguna razón era un string y lo convertí a num
      const stringArray = JSON.stringify(parsedArray); // lo convierte
      localStorage.setItem('favoritos', stringArray); // le paso el nombre del dato que quiero guardar, y el dato
    } else {
      const primerMovie = [Number(this.props.id)];
      const stringArray = JSON.stringify(primerMovie); // lo convierte
      localStorage.setItem('favoritos', stringArray); // le paso el nombre del dato que quiero guardar, y el dato
    }
    this.setState({
      esFavorito: true
    });
  }


  

  componentDidMount() {
    
    const id= this.props.id

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((err) => console.error(err));


    //fav
    const storage = localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      const estaEnFavoritos = parsedArray.includes(Number(this.props.id)); // esto devuelve true o false
      this.setState({
        esFavorito: estaEnFavoritos // true o false
      });
    }
  }

  sacarFavorito() {
    const storage = localStorage.getItem('favoritos');
    const parsedArray = JSON.parse(storage); // ahora está en formato JS
    // tengo que ver si tengo el id de una película para ver si está o no en favoritos
    const favoritosRestantes = parsedArray.filter(id => id !== Number(this.props.id));
    const stringArray = JSON.stringify(favoritosRestantes); // lo convierte
    localStorage.setItem('favoritos', stringArray); // le paso el nombre del dato que quiero guardar, y el dato
    this.setState({
      esFavorito: false
    });
  }

  render() {
    return (
      <>
        {this.state.data && this.state.data.genres ? (
          <div className="movie-detail">
            <div className="movie-image">
              <img
                src={`https://image.tmdb.org/t/p/w500${this.state.data.backdrop_path}`}
                alt="Backdrop"
              />
            </div>
            <div className="movie-info">
              <h1>{this.state.data.title}</h1>
              <p>Rating: {this.state.data.vote_average}</p>
              <p>{this.props.id}</p>

              <div className="genres">
                <p>Géneros: </p>
                {this.state.data.genres.map((genero, idx) => (
                  <p key={idx} className="genre-item">
                    {genero.name}
                  </p>
                ))}
              </div>

              <p>Fecha de estreno: {this.state.data.release_date}</p>
              <p>Duración en minutos: {this.state.data.runtime}</p>
              
              <button onClick={() =>
              this.state.esFavorito ? this.sacarFavorito() : this.agregarFavorito()
              }>
              {!this.state.esFavorito ? 'Agregar a Favoritos' : 'Sacar de Favoritos'}
              </button>

              <h4>{this.state.data.overview}</h4>
            </div>
          </div>
        ) : (
          <Loader/>
        )}
      </>
    );
  }
}

export default MovieDetail;
