import { useState } from "react"
import { Route, Routes } from "react-router-dom"


import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MovieList from "./pages/MovieList"
import MovieDetails from "./pages/MovieDetails"
import AddMovie from "./pages/AddMovie"

import movies from "./data/movies.json"



function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    })
    setMoviesToDisplay(newList)
  }


  const createMovie = (newMovieDetails) => {

    // calculate the id of the next movie that we will create
    const movieIds = moviesToDisplay.map((movieObj) => {
      return movieObj.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    // prepare an object with the details of the new movie
    const newMovie = {
      ...newMovieDetails,
      id: nextId
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)
  }



  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
        <Route path="/create" element={<AddMovie onCreate={createMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
