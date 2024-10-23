import './App.css'
import { Movies } from './components/Movies.jsx'
import withResults from './ResultadoApi/with-results.json'
// import withoutResults from './ResultadoApi/no.results.json'

export function useMovies () {
  const movies = withResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
function App () {
  const { movies: mappdeMovies } = useMovies()

  return (
    <div className='AppPage'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star War, Harry Potter..' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies
          movies={mappdeMovies}
        />
      </main>
    </div>
  )
}
export default App
