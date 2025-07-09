
import movies from "../data/movies.json"

function MovieList() {

    return (
        <>
            <h1>List of movies:</h1>

            {movies.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>
                        <img src={movieObj.imgURL} alt="" />
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>
                    </div>
                )
            })}
        </>

    )
}

export default MovieList;