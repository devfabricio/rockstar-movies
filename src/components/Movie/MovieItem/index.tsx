import React from 'react'
import * as S from './styled'
import { Movie } from '../../../services/types'
import { Link } from 'react-router-dom'
import MoviePoster from '../MoviePoster'

interface MovieItemProps {
  movie: Movie
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (<S.MovieItemWrapper>
      <Link to={`/${movie.id}`}>
        <MoviePoster movieTitle={movie.title} posterPath={movie.poster_path} />
        <h3>{movie.title}</h3>
    </Link>
  </S.MovieItemWrapper>)
}

export default MovieItem
