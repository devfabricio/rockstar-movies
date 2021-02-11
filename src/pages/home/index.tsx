import React, { useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity } from '../../services/requests'
import MovieItem from '../../components/Movie/MovieItem'

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  })
  return (
    <div className="App">
      <ul>
        {movies.map((movie, index) => {
          return (<li key={movie.id}>
            <MovieItem movie={movie} />
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Home
