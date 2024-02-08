function ListOfMovies({ movies }) {
  if (movies) {
    console.log(movies)
    return (
      <ul className='movies'>
        {movies.map((m) => (
          <li className='movie' key={m.imdbID}>
            <h3>Movie: {m.Title}</h3>
            <img src={m.Poster}></img>
            <p>{m.Year}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListOfMovies
