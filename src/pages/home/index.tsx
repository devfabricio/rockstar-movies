import React, { useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity } from '../../services/requests'
import * as S from './styled'
import MovieItem from '../../components/Movie/MovieItem'
import Header from '../../components/Layout/Header'

const Home = () => {
  const [listedMovies, setListedMovies] = useState<Movie[]>([])
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])

  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setListedMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  const movies = searchedMovies.length > 0
    ? searchedMovies
    : listedMovies

  return (
    <S.Wrapper>
      <Header setSearchedMovies={setSearchedMovies} />
      <S.Content>
        <S.List>
          {movies.map((movie) => {
            return (<MovieItem movie={movie} key={movie.id} />)
          })}
        </S.List>
      </S.Content>
    </S.Wrapper>
  )
}

export default Home
