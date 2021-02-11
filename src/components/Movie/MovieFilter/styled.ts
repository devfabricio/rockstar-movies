import styled from 'styled-components'

export const MovieFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin-top: 40px;
  padding: 0 20px;
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
