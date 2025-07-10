import MovieCard from "./MovieCard";


function MovieList(props) {
    return (
        <>
            {props.moviesArr.map((movieObj) => {
                return (
                    <MovieCard 
                        key={movieObj.id} 
                        movieDetails={movieObj}
                        onDelete={props.onDelete}
                    />
                )
            })}
        </>

    )
}

export default MovieList;