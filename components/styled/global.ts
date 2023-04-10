import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
   }
`;

export default Global;
