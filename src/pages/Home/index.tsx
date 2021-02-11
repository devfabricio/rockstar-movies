import React, { useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity } from '../../services/requests'
import * as S from './styled'
import MovieItem from '../../components/Movie/MovieItem'
import Header from '../../components/Layout/Header'
import MovieFilter from '../../components/Movie/MovieFilter'

const Home = () => {
  const [listedMovies, setListedMovies] = useState<Movie[]>([])
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])
  const [currentRating, setCurrentRating] = useState<number>(0)

  const getMovies = (rating?: number) => {
    listMoviesByPopularity(rating)
      .then(data => setListedMovies(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    console.log(currentRating)
    getMovies(currentRating)
  }, [currentRating])

  const movies = searchedMovies.length > 0
    ? searchedMovies
    : listedMovies

  return (
    <S.Wrapper>
      <Header setSearchedMovies={setSearchedMovies} />
      <S.Content>
        <MovieFilter currentRating={currentRating} setCurrentRating={setCurrentRating} />
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