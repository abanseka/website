import { device } from "theme";
import styled from "styled-components";

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
