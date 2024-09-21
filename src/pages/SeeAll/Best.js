import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

const Best = () => {
    return (
        <>
            <MovieGrid url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" limit = "30" />
        </>
    );
}

export default Best;
