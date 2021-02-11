import React, { ChangeEvent, useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity, searchMovies } from '../../services/requests'
import MovieItem from '../../components/Movie/MovieItem'

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleSearchMovies = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    searchMovies(query)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header>
        <h1>My Rockstar Movies</h1>
        <input type={'search'} onChange={(event => handleSearchMovies(event))} />
      </header>
      <ul>
        {movies.map((movie) => {
          return (<li key={movie.id}>
            <MovieItem movie={movie} />
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Home
