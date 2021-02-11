import React, { useEffect, useState } from 'react'
import { listMoviesByPopularity } from './services/requests'
import { Movie } from './services/types'
import { imgBaseUrl } from './services/api'

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  })
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return (<li key={movie.id}>
          <img src={`${imgBaseUrl}/${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
        </li>)
      })}
    </div>
  )
}

export default App
