import { useState } from 'react'
import moviesResult from './results/results.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const movies = moviesResult.Search
  console.log(movies)
  return (
    <div className='page'>
      <header>
        <h1>Movie's test</h1>

        <form className='form'>
          <input type='text' placeholder='Star Wars, Avengers, Batman...' />
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
          'ea'
        )}
      </main>
    </div>
  )
}

export default App
