import styled from 'styled-components'

export const MovieInfo = styled.div`
  margin-left: 20px;
  font-family: 'Roboto', sans-serif;
  h2 {
    margin: 0
  }
`

export const RatingStarsList = styled.ul`
  margin-left: 5px;
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 10px 0;
  span {
    color: #bfbfbf;
  }
  span.checked {
    color: orange;
  }
  li {
    margin-left: 1px;
    cursor: pointer;
    display: inline;
  }
`

export const MovieInfoDivision = styled.div`
  margin-bottom: 10px;
  a {
    color: #d9502c;
    font-weight: bold
  }
`
