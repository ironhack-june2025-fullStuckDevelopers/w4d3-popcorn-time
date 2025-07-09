
import { useState } from "react";

import movies from "../data/movies.json"

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
                    <div key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>
                        <img src={movieObj.imgURL} alt="" />
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>

                        <p>
                            <button onClick={() => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                        </p>
                    </div>
                )
            })}
        </>

    )
}

export default MovieList;