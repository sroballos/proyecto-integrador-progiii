import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

const Popular = () => {
    return (
        <>
            <MovieGrid url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" limit = "20" />
        </>
    );
}

export default Popular;
