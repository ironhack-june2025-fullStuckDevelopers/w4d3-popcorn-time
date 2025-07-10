import {useState} from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./components/MovieList"

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  
  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    })
    setMoviesToDisplay(newList)
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie}  />
      <Footer />
    </>
  )
}

export default App
