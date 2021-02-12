import React from 'react'
import { ProductionCompany } from '../../../services/types'
import * as S from '../../../pages/SingleMovie/styled'

interface MovieGenresProps {
  productionCompanies: ProductionCompany[]
}

const MovieProductions: React.FC<MovieGenresProps> = ({ productionCompanies }) => {
  return (<S.MovieInfoDivision>
    <b>Productions:</b>
    <div>
      {productionCompanies.map((company, index) => {
        return <span key={index}>{company.name}, </span>
      })}
    </div>
  </S.MovieInfoDivision>)
}

export default MovieProductions
