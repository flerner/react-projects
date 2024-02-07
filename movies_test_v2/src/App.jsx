import './App.css'
import getMovies from './services/getMovies.js'
import { useRef, useState } from 'react'
import Movies from './components/Movies.jsx'
function App() {
  const userInput = useRef()
  const [movies, setMovies] = useState([])
  const emptyResponse = 'No movies available'
  const handleSubmit = async (e) => {
    e.preventDefault()
    const movies = await getMovies(userInput.current.value)
    setMovies(movies)

    /*
      const fields = new window.FormData(e.target)
      const query = fields.get('query')
      //input catched in query const now
      //same behaviour
    */
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
        </form>
      </header>
      <main>
        {movies ? <Movies movies={movies}></Movies> : { emptyResponse }}
      </main>
    </div>
  )
}

export default App
