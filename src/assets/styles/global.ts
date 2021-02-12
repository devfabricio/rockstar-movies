import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0; 
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  #root {
    width: 100%
  }
  
  button {
    cursor: pointer;
  }
  ol, ol li, ul, ul li {
    margin: 0;
    padding: 0;
    line-height: 1em;
    list-style: none;
  }
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  }
  a {
    text-decoration: none;
  }
`
