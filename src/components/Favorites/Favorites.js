import { Component } from "react";
import Loader from "../Loader/Loader";
import Movie from "../Movie/Movie";
import { options } from "../../options";
import NotFav from "../NoFav/NoFav";

export class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem("favoritos");

    if (storage !== null) {
      const parsedArray = JSON.parse(storage);

      Promise.all(
        parsedArray.map((id) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
          ).then((response) => response.json())
        )
      )
        .then((movies) => {
          this.setState({
            movies: movies,
            isLoading: false,
          });
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <section className="gridContainer">
            {this.state.movies.length > 0 ? (
              this.state.movies.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.original_title}
                  desc={movie.overview}
                  img={movie.poster_path}
                  id={movie.id}
                />
              ))
            ) : (
              <NotFav />
            )}
          </section>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Favoritos;
