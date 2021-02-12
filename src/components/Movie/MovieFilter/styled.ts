import styled from 'styled-components'

export const MovieFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin: 60px 0 10px 0;
  padding: 0 20px;
  
  svg {
    color: #d9502c
  }
`

export const RatingStarsList = styled.ul`
  margin-left: 5px;
  list-style: none;
  display: inline;
  padding: 0;
  span.checked {
    color: orange;
  }
  li {
    margin-left: 1px;
    cursor: pointer;
    display: inline;
  }
`
