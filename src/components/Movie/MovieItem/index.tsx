import React from 'react'
import * as S from './styled'
import { Movie } from '../../../services/types'
import { imgBaseUrl } from '../../../services/api'
import { Link } from 'react-router-dom'

interface MovieItemProps {
  movie: Movie
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (<S.MovieItemWrapper>
      <Link to={`/${movie.id}`}>
        <img src={`${imgBaseUrl}/${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
    </Link>
  </S.MovieItemWrapper>)
}

export default MovieItem
