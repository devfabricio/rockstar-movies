import React, { ChangeEvent, useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity, searchMovies } from '../../services/requests'
import MovieItem from '../../components/Movie/MovieItem'

const Home = () => {
  const [listedMovies, setListedMovies] = useState<Movie[]>([])
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])

  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setListedMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleSearchMovies = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    if (query.length > 0) {
      searchMovies(query)
        .then(data => setSearchedMovies(data.results))
        .catch(error => console.log(error))
    } else {
      setSearchedMovies([])
    }
  }

  const movies = searchedMovies.length > 0
    ? searchedMovies
    : listedMovies

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
