import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getMovieDetail } from '../../services/requests'
import * as S from './styled'
import Header from '../../components/Layout/Header'
import { Movie } from '../../services/types'
import { imgBaseUrl } from '../../services/api'

const SingleMovie: React.FC = () => {
  const history = useHistory()
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    const arrPathNames = history.location.pathname.split('/')
    const movieId = arrPathNames[arrPathNames.length - 1]

    getMovieDetail(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error))
  }, [history])

  const ratingStars = new Array(5).fill(1)

  console.log(movie)

  return (<S.Wrapper>
    <Header goToHomeLink={true} />
    <S.Content>
      {movie && <S.MovieDetailWrapper>
        <div>
          <img src={`${imgBaseUrl}/${movie.poster_path}`} alt={movie.title} />
        </div>
        <S.MovieInformations>
          <h2>{movie.title}</h2>
          <S.RatingStarsList>
            {ratingStars.map((star: number, index) => {
              const rate = (index + 1) * 2
              return <li key={index}>
                <span className={`fa fa-star ${rate <= movie?.vote_average ? 'checked' : null}`} />
              </li>
            })}
          </S.RatingStarsList>
          <div>
            {movie.genres?.map((genre, index) => {
              return <span key={index}>{genre.name}, </span>
            })}
          </div>
          <p>{movie.overview}</p>
          <div>
            <b>Date: </b>
            <span>{movie.release_date}</span>
          </div>
          <div>
            <b>Productions:</b>
            <div>
            {movie.production_companies?.map((company, index) => {
              return <span key={index}>{company.name}, </span>
            })}
            </div>
          </div>
          <a href={movie.homepage} rel="noreferrer" target={'_blank'}>Original Site</a>
        </S.MovieInformations>
      </S.MovieDetailWrapper>}
    </S.Content>
  </S.Wrapper>)
}

export default SingleMovie
