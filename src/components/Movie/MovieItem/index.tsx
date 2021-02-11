import React from 'react'
import { Movie } from '../../../services/types'
import { imgBaseUrl } from '../../../services/api'
import { Link } from 'react-router-dom'

interface MovieItemProps {
  movie: Movie
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (<Link to={`/${movie.id}`}>
    <img src={`${imgBaseUrl}/${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
  </Link>)
}

export default MovieItem
