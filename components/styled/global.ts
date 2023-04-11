import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #A0775E;
    background: #f8efe5;
    font-family: 'Poppins', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
   }
`;

export default GlobalStyles;
