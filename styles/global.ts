import { device, theme } from "theme";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'JetBrains Mono',sans-serif;
    color: ${theme.colors.primary};
    background: ${theme.colors.offWhite};
    position: relative;
  }

  img {
    max-width: 100%;
    height: auto;
   }

  .noisePattern {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 300;
    opacity: 0.5;
    pointer-events: none;
  }
}
`;

export const AppContainer = styled.main`
  padding: 15rem 0.625rem 0;
  overflow-y: scroll;
  height: 100vh;
  height: 100dvh;

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  @media ${device.tablet} {
    padding-top: 5rem;
  }
`;

export const MenuContainer = styled.div`
  max-width: 42rem;
  margin: auto;
  .footerMenu {
    padding: 1rem 0;
  }
  @media ${device.tablet} {
    .headerMenu,
    .footerMenu {
      justify-content: center;
      text-align: center;
    }
  }
`;

export default GlobalStyles;
