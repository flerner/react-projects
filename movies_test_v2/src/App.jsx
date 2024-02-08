import './App.css'
import { useRef, useState } from 'react'
import useMovies from './hooks/useMovies.js'
import Movies from './components/Movies.jsx'
function App() {
  const userInput = useRef('')
  const [checked, setChecked] = useState(false)
  const { movies, getMovies, sortMovies } = useMovies()

  const handleSubmit = async (e) => {
    e.preventDefault()

    getMovies(userInput.current.value)

    /*
      const fields = new window.FormData(e.target)
      const query = fields.get('query')
      //input catched in query const now
      //same behaviour
    */
  }
  const handleCheckboxChange = () => {
    setChecked(!checked)
  }
  return (
    <div className='page'>
      <header>
        <h1>Movie's test</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            type='text'
            ref={userInput}
            placeholder='Star Wars, Avengers, Batman...'
          />
          <button type='submit'>Find</button>
          <p>Order by year</p>
          <input
            type='checkbox'
            checked={checked}
            onChange={handleCheckboxChange}
          ></input>
        </form>
      </header>
      <main>
        {movies ? (
          <Movies movies={checked ? sortMovies() : movies}></Movies>
        ) : (
          <h1>{emptyResponse} </h1>
        )}
      </main>
    </div>
  )
}

export default App
