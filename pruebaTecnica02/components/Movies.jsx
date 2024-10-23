function ListOfMovies ({ movies }) {
  return (
    <ul className='listaPeliculas'>
      {
         movies.map(movie => (
           <li key={movie.id}>
             <h3>{movie.title}</h3>
             <p>{movie.year}</p>
             <img src={movie.poster} alt={movie.Title} />
           </li>
         ))
        }
    </ul>
  )
}

function NoMovies () {
  return (
    <h2>No se ha encontrado ninguna pelicula con ese nombre</h2>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies
          movies={movies}
        />
      : <NoMovies />
  )
}
