import { createGlobalStyle } from "styled-components";
import { themeType } from "types/common";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${(theme: themeType) => theme.colors.primary};
    background: ${(theme: themeType) => theme.colors.offWhite};
  }

  img {
    max-width: 100%;
    height: auto;
   }
`;

export default GlobalStyles;
