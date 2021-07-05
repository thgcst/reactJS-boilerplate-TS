import { createGlobalStyle } from 'styled-components';
import { mixinRespondTo } from './tools';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.OpenSans};
  }

  *:focus{
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root{
    width: 100%;
    height: 100vh;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.error};
    font-family: ${({ theme }) => theme.fonts.OpenSans};
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  body, input, button{
    /* font-family: ${({ theme }) => theme.fonts.OpenSans}; */
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }

 ${mixinRespondTo.md`
   html {
     font-size: 50%;
   }
 `}

`;
