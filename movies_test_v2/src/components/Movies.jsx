function ListOfMovies({ movies }) {
  if (movies) {
    return (
      <ul className='movies'>
        {movies.map((m) => (
          <li className='movie' key={m.imdbID}>
            <h3>Movie: {m.Title}</h3>
            <img src={m.Poster}></img>
          </li>
        ))}
      </ul>
    )
  }

  return <h3>Not available movies</h3>
}

export default ListOfMovies
