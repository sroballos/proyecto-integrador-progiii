import { Component } from "react";
import { options } from "../../options";

import "./MovieDetailInfo.css";
import Loader from "../Loader/Loader";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  

  componentDidMount() {
    
    const id= this.props.id

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch((err) => console.error(err));
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
              <button>Agregar a Favoritos</button>
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
