import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getMovieDetail } from '../../services/requests'
import * as S from './styled'
import Header from '../../components/Layout/Header'
import { Movie } from '../../services/types'
import MovieInfo from '../../components/Movie/MovieInfo'
import MoviePoster from '../../components/Movie/MoviePoster'

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
        <MoviePoster movieTitle={movie.title} posterPath={movie.poster_path} />
        <MovieInfo movie={movie} />
      </S.MovieDetailWrapper>}
    </S.Content>
  </S.Wrapper>)
}

export default SingleMovie
