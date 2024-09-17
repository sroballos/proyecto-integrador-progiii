
import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid"
import "./Home.css"

const Home = () => {
    return (
        <>
        <h3 className="intro">Más Populares</h3>
        <button className = "verTodas">Ver Todas</button>
        <MovieGrid url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" />

        <h3 className="intro">Top Rated</h3>
        <button className = "verTodas">Ver Todas</button>

        <MovieGrid url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" />
        </>
    );
  }
  
  export default Home;
  