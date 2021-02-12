import styled from 'styled-components'

export const Wrapper = styled.div`
  
`
export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const MovieDetailWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`
export const MovieInformations = styled.div`
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
  span.checked {
    color: orange;
  }
  li {
    margin-left: 1px;
    cursor: pointer;
    display: inline;
  }
`
