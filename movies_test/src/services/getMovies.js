const BASE_URL = 'https://www.omdbapi.com/?apikey=4287ad07'

async function getMovies(input) {
  const fullUrl = BASE_URL + '&s=' + input
  console.log(fullUrl)
  const res = await fetch(fullUrl)
  const data = await res.json()
  const movies = data.Search
  return movies
}

export default getMovies
