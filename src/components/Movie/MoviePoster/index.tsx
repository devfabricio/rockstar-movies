import React from 'react'
import { imgBaseUrl } from '../../../services/api'
import movieThumb from '../../../assets/images/movie_thumb.png'

interface MoviePosterProps {
  posterPath?: string
  movieTitle: string
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, movieTitle }) => {
  return (<div>
    <img src={posterPath ? `${imgBaseUrl}/${posterPath}` : movieThumb} alt={movieTitle} />
  </div>)
}

export default MoviePoster
