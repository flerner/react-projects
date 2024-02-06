import './App.css'
import getMovies from './services/getMovies.js'
import { useState } from 'react'
function App() {
  const [userInput, setUserInput] = useState('')
  const [movies, setMovies] = useState([])
  const emptyResponse = 'No movies available'
  const handleSubmit = async (e) => {
    e.preventDefault()
    const movies = await getMovies(userInput)
    setMovies(movies)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie's test</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            value={userInput}
            placeholder='Star Wars, Avengers, Batman...'
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
          />
          <button type='submit'>Find</button>
        </form>
      </header>
      <main>
        {movies ? (
          <ul>
            {movies.map((m) => (
              <li key={m.imdbID}>
                <h3>Movie: {m.Title}</h3>
                <img src={m.Poster}></img>
              </li>
            ))}
          </ul>
        ) : (
          { emptyResponse }
        )}
      </main>
    </div>
  )
}

export default App
