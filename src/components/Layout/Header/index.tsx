import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
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
    <input type={'search'} onChange={(event => handleSearchMovies(event))} />
  </S.HeaderWrapper>)
}

export default Header
