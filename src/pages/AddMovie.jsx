import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddMovie(props) {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // prepare an object with the details of the new movie
        const newMovie = {
            title: title,
            year: year
        }

        // invoke function in the parent component
        props.onCreate(newMovie)

        // clear form
        setTitle("")
        setYear("")

        // redirect to the homepage
        navigate("/")
    }


    return (
        <section className="AddMovie card">
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
    )
}

export default AddMovie