import React from 'react'
import * as S from '../styled'

const ratingStars = new Array(5).fill(1)

interface RatingStarsProps {
  movieVoteAverage: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ movieVoteAverage }) => {
  return (<S.RatingStarsList>
    {ratingStars.map((star: number, index) => {
      const rate = (index + 1) * 2
      return <li key={index}>
        <span className={`fa fa-star ${rate <= movieVoteAverage ? 'checked' : null}`} />
      </li>
    })}
  </S.RatingStarsList>)
}

export default RatingStars
