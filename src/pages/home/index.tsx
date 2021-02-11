import React, { useCallback, useEffect, useState } from 'react'
import { Movie } from '../../services/types'
import { listMoviesByPopularity } from '../../services/requests'
import * as S from './styled'
import MovieItem from '../../components/Movie/MovieItem'
import Header from '../../components/Layout/Header'

const Home = () => {
  const [listedMovies, setListedMovies] = useState<Movie[]>([])
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])
  const [currentRating, setCurrentRating] = useState<number>(0)

  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setListedMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleClickStar = useCallback((rate: number) => {
    setCurrentRating(rate)
  }, [])

  const ratingStars = new Array(5).fill(1)

  const movies = searchedMovies.length > 0
    ? searchedMovies
    : listedMovies

  return (
    <S.Wrapper>
      <Header setSearchedMovies={setSearchedMovies} />
      <S.Content>
        <div>
          <h2>Most Popular Movies</h2>
          <div>Filter by rating:
            <S.RatingStarsList>
              {ratingStars.map((star: number, index) => {
                const rate = (index + 1) * 2
                console.log(rate, currentRating)
                return <li key={index} onClick={() => handleClickStar(rate)}>
                  <span className={`fa fa-star ${rate <= currentRating ? 'checked' : null}`} />
                </li>
              })}
            </S.RatingStarsList>
          </div>
        </div>
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
