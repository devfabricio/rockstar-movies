import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  
  h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 900;
    margin: 10px 0;
  }
  p {
    font-family: 'Roboto Slab', serif;
    margin: 10px 0 20px 0;
  }
`

export const SearchWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  svg {
    font-size: 1.2rem;
    position: absolute;
    left: 10px;
    top: 10px
  }
  input {
    width: 100%;
    max-width: 600px;
    height: 40px;
    padding-left: 35px;
  }
`
