import Link from "next/link";
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

  .noise{
    width: 100vw;
    height: 100vh;
    position:fixed;
    z-index: 300;
    opacity: 0.4;
    pointer-events: none;
  }

  .workpage{
    width:100%;

    @media ${device.mobileL} {
      flex-direction:column;
      align-items:center;
    }
  }
}
`;

export const AppContainer = styled.main`
  padding: 0 0.625rem;
  overflow-y: scroll;
  height: 100vh;
  height: 100dvh;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

export const MainContainer = styled.div`
  max-width: 42rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  padding: 3rem 0.625rem;
  gap: 1rem;
`;

export const MenuContainer = styled.div`
  max-width: 42rem;
  margin: auto;
  top: 1rem;
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

type text = { ta?: "left" | "center" | "right" };
export const SmallText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  text-align: ${({ ta = "left" }: text) => ta};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: 0.8rem;
  }
`;

export const NormalText = styled.p`
  line-height: 1;
  font-weight: 400;
  font-size: 1.125rem;
  text-align: ${({ ta }: text) => ta};
  @media ${device.tablet} {
    word-break: break-word;
    font-size: 0.8rem;
    line-height: unset;
  }
`;

export const TitleText = styled.h2`
  line-height: 1.2;
  font-weight: 500;
  font-size: 1.125rem;
  text-transform: capitalize;
  text-align: ${({ ta = "left" }: text) => ta};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: 1rem;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  transition: all 0.2s ease-in-out;

  svg {
    width: 1.625rem;
    height: 1.625rem;
    fill: ${theme.colors?.primary};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: ${theme.colors.highlight};
    svg {
      scale: 1.2;
    }
  }

  @media ${device.tablet} {
    font-size: 0.9rem;
    flex-direction: column;
    gap: 0;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export default GlobalStyles;
