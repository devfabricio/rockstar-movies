import React, {useCallback, useEffect, useState} from 'react'
import { Movie } from '../../services/types'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { listMoviesByPopularity } from '../../services/requests'
import * as S from './styled'
import MovieItem from '../../components/Movie/MovieItem'
import Header from '../../components/Layout/Header'

const Home = () => {
  const [listedMovies, setListedMovies] = useState<Movie[]>([])
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])
  const [ratingStars, setRatingStars] = useState<number[]>(new Array(5).fill(0))

  useEffect(() => {
    listMoviesByPopularity()
      .then(data => setListedMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleMouseOverStar = useCallback((index: number) => {
    const filledStars = new Array(index + 1).fill(1)
    let i = 0
    for (const filledStar of filledStars) {
      console.log(i)
      ratingStars[i] = filledStar
      i++
    }
    setRatingStars(ratingStars)
  }, [ratingStars])

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
            <ul>
              {ratingStars.map((star: number, index) => {
                console.log(star)
                return <li key={index} onMouseEnter={() => handleMouseOverStar(index)}>
                  {star > 0 ? <AiFillStar /> : <AiOutlineStar />}
                </li>
              })}
            </ul>
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
