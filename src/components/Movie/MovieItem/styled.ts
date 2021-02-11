import styled from 'styled-components'

export const MovieItemWrapper = styled.div`
  flex: 0;
  margin: 15px;
  a {
    text-decoration: none;
    h3 {
      max-width: 100%;
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      margin: 5px 0;
      color: #222;
      word-wrap: break-word;
    }
    &:hover {
      h3 {
        color: #d9502c
      }
    }
    img {
      max-width: 160px;
    }
  }
`
