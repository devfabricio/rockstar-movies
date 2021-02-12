import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  background: #d9502c;
  
  h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 900;
    margin: 10px 0;
    color: #fff;
    opacity: 0.9;
  }
  p {
    font-family: 'Roboto Slab', serif;
    margin: 10px 0 20px 0;
    color: #fff;
    opacity: 0.9;
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
    top: 10px;
    opacity: 0.3;
  }
  input {
    width: 100%;
    max-width: 600px;
    height: 40px;
    padding-left: 35px;
    border: none;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`

export const GoToHome = styled.div`
  a {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  display: inline-block;
  margin-left: 5px;
  &:hover {
    opacity: 0.8
  }
 }
`
