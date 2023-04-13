import Link from "next/link";
import { themeType } from "types/common";
import { FlexContainer } from "./flex";
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
    color: ${(theme: themeType) => theme.colors.primary};
    background: ${(theme: themeType) => theme.colors.offWhite};
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
`;

export const AppContainer = styled.main`
  height: 100vh;
  height: 100dvh;
  padding: 0 0.625rem;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

export const WidgetWrapper = styled(FlexContainer)`
  max-width: 42rem;
  margin: auto;
  postion: sticky;
  top: 1rem;
  bottom: 1rem;
  @media ${device.tablet} {
    justify-content: center;
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
  text-align: ${({ ta = "left" }: text) => ta};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: 0.8rem;
  }
`;

export const TitleText = styled.h2`
  line-height: 1.2;
  font-weight: 700;
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
  color: ${(theme: themeType) => theme.colors?.primary};

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${(theme: themeType) => theme.colors?.primary};
  }

  &:hover {
    color: ${(theme: themeType) => theme.colors?.highlight};

    svg {
      fill: ${(theme: themeType) => theme.colors?.highlight};
    }
  }

  @media ${device.tablet} {
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0;
    svg {
      width: 1.2rem;
    }
  }
`;

export default GlobalStyles;
