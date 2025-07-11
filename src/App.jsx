import {useState} from "react"
import { Route, Routes } from "react-router-dom"


import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MovieList from "./pages/MovieList"
import MovieDetails from "./pages/MovieDetails"

import movies from "./data/movies.json"



function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    })
    setMoviesToDisplay(newList)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newMovie = {
      title: title,
      year: year
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)

    // clear form
    setTitle("")
    setYear("")
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Create a new movie</h2>

        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              required
              placeholder="enter the title" 
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <label>
            Year:
            <input 
              type="number" 
              min={1950}
              max={2050}
              name="year" 
              required
              placeholder="enter the year" 
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
            />
          </label>

          <button>Create</button>
        </form>

      </section>

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
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
