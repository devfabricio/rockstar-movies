import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FaSearch } from 'react-icons/fa'
import * as S from './styled'
import { Movie } from '../../../services/types'
import { searchMovies } from '../../../services/requests'

interface HeaderProps {
  setSearchedMovies: Dispatch<SetStateAction<Movie[]>>
}

const Header: React.FC<HeaderProps> = ({ setSearchedMovies }) => {
  const handleSearchMovies = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    if (query.length > 0) {
      searchMovies(query)
        .then(data => setSearchedMovies(data.results))
        .catch(error => console.log(error))
    } else {
      setSearchedMovies([])
    }
  }

  return (<S.HeaderWrapper>
    <h1>Rockstar Movies</h1>
    <p>All about your favorite movies ... in one place!</p>
    <S.SearchWrapper>
      <FaSearch />
      <input type={'search'} onChange={(event => handleSearchMovies(event))} placeholder={'Search for a movie...'} />
    </S.SearchWrapper>
  </S.HeaderWrapper>)
}

export default Header
