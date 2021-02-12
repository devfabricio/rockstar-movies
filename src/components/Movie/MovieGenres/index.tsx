import React from 'react'
import { Genre } from '../../../services/types'
import * as S from '../../../pages/SingleMovie/styled'

interface MovieGenresProps {
  movieGenres: Genre[]
}

const MovieGenres: React.FC<MovieGenresProps> = ({ movieGenres }) => {
  return (<S.MovieInfoDivision>
    {movieGenres.map((genre, index) => {
      return <span key={index}>{genre.name}, </span>
    })}
  </S.MovieInfoDivision>)
}

export default MovieGenres
