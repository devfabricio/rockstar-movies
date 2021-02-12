import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getMovieDetail } from '../../services/requests'
import * as S from './styled'
import Header from '../../components/Layout/Header'
import { Movie } from '../../services/types'
import { imgBaseUrl } from '../../services/api'
import RatingStars from '../../components/Movie/RatingStars'
import MovieGenres from '../../components/Movie/MovieGenres'
import MovieProductions from '../../components/Movie/MovieProductions'

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

  return (<S.Wrapper>
    <Header goToHomeLink={true} />
    <S.Content>
      {movie && <S.MovieDetailWrapper>
        <div>
          <img src={`${imgBaseUrl}/${movie.poster_path}`} alt={movie.title} />
        </div>
        <S.MovieInfo>
          <h2>{movie.title}</h2>
          {movie.vote_average && <RatingStars movieVoteAverage={movie.vote_average} />}
          {movie.genres && <MovieGenres movieGenres={movie.genres} />}
          <S.MovieInfoDivision>
            <p>{movie.overview}</p>
          </S.MovieInfoDivision>
          <S.MovieInfoDivision>
            <b>Date: </b>
            <span>{movie.release_date}</span>
          </S.MovieInfoDivision>
          {movie.production_companies && <MovieProductions productionCompanies={movie.production_companies} />}
          <S.MovieInfoDivision>
            <a href={movie.homepage} rel="noreferrer" target={'_blank'}>Original Site</a>
          </S.MovieInfoDivision>
        </S.MovieInfo>
      </S.MovieDetailWrapper>}
    </S.Content>
  </S.Wrapper>)
}

export default SingleMovie
