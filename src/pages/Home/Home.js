
import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css"

const Home = () => {
    return (
        <>
        <h3 className="intro">Más Populares</h3>
        <Link to="/popular">
            <button className = "verTodas">Ver Todas</button>
        </Link>
        
        <MovieGrid url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" limit = "5" />

        <h3 className="intro">Top Rated</h3>
        <Link to="/toprated">
            <button className = "verTodas">Ver Todas</button>
        </Link>
        
        <MovieGrid url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" limit = "5" />
        </>
    );
  }
  
  export default Home;
  