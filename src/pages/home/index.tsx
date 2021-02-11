import React, { useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity } from '../../services/requests'
import { Link } from 'react-router-dom'
import { imgBaseUrl } from '../../services/api'

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
            <Link to={`/${movie.id}`}>
              <img src={`${imgBaseUrl}/${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Home
