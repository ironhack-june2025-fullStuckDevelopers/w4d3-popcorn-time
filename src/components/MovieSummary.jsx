import { Link } from "react-router-dom"

function MovieSummary(props) {

    return (
        <div className="card">
            <h3>{props.movieDetails.title}</h3>
            <img src={props.movieDetails.imgURL} alt="" />
            <p>Year: {props.movieDetails.year}</p>

            <button onClick={()=> {props.onDelete(props.movieDetails.id)}}>Delete</button>

            <Link to={`/movies/${props.movieDetails.id}`}>
                <button className="btn btn-primary">
                    More details
                </button>
            </Link>
        </div>
    )
}

export default MovieSummary