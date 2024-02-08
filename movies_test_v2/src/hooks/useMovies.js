import getMoviesService from '../services/getMovies.js'
import { useRef, useState } from 'react'

function useMovies() {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef('')
  const getMovies = async (userInput) => {
    if (previousSearch.current === userInput) {
      return
    }
    previousSearch.current = userInput
    const moviesRes = await getMoviesService(userInput)
    setMovies(moviesRes)
  }
  const sortMovies = () => {
    const sortedMovies = [...movies].sort((m1, m2) => m1.Year - m2.Year)
    console.log(sortedMovies)
    return sortedMovies
  }

  return { movies, getMovies, sortMovies }
}

export default useMovies
