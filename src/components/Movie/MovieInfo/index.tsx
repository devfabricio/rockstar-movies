import React from 'react'
import { Movie } from '../../../services/types'
import RatingStars from './RatingStars'
import MovieGenres from './MovieGenres'
import * as S from './styled'
import MovieProductions from './MovieProductions'
import { format } from 'date-fns'

interface MovieInfoProps {
  movie: Movie
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (<S.MovieInfo>
    <h2>{movie.title}</h2>
    {movie.vote_average && <RatingStars movieVoteAverage={movie.vote_average} />}
    {movie.genres && <MovieGenres movieGenres={movie.genres} />}
    <S.MovieInfoDivision>
      <p>{movie.overview}</p>
    </S.MovieInfoDivision>
    <S.MovieInfoDivision>
      <b>Year: </b>
      <span>{format(new Date(movie.release_date), 'yyyy')}</span>
    </S.MovieInfoDivision>
    {movie.production_companies && <MovieProductions productionCompanies={movie.production_companies} />}
    <S.MovieInfoDivision>
      <a href={movie.homepage} rel="noreferrer" target={'_blank'}>Original Site</a>
    </S.MovieInfoDivision>
  </S.MovieInfo>)
}

export default MovieInfo
