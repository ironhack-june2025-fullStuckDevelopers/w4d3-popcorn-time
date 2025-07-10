
import { useState } from "react";

import movies from "../data/movies.json"
import MovieCard from "./MovieCard";


function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    
    // deleteMovie: will receive the id of a movie to delete & update state with the new list of movies
    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movie) => {
            return movie.id !== movieId;
        })

        // moviesToDisplay = newList; // NEVER, NEVER, MODIFY STATE DIRECTLY
        setMoviesToDisplay(newList)
    }


    return (
        <>
            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <MovieCard 
                        key={movieObj.id} 
                        movieDetails={movieObj}
                        onDelete={deleteMovie}
                    />
                )
            })}
        </>

    )
}

export default MovieList;