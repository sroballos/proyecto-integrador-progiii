
import React from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid"

const Main = () => {
    return (
        <>
        <h3 className="test">Lorem Ipsum 1</h3>
        <MovieGrid url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" />

        <h3 className="test">Lorem Ipsum 2</h3>
        <MovieGrid url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" />
        </>
    );
  }
  
  export default Main;
  