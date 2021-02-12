import React from 'react'
import { Genre } from '../../../../services/types'
import * as S from '../styled'

interface MovieGenresProps {
  movieGenres: Genre[]
}

const MovieGenres: React.FC<MovieGenresProps> = ({ movieGenres }) => {
  return (<S.MovieInfoDivision>
    {movieGenres.map((genre, index) => {
      return <span key={index}>{genre.name}{index === movieGenres.length - 1 ? '' : ','} </span>
    })}
  </S.MovieInfoDivision>)
}

export default MovieGenres
