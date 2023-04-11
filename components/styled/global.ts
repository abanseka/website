import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";
import { themeType } from "types/common";
import { FlexContainer } from "./flex";
import { device } from "../../theme";

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

export const AppContainer = styled.main`
  max-width: 810px;
  margin: auto;
  padding: 0 0.625rem;
`;

export const WidgetWrapper = styled(FlexContainer)`
  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 0.5rem;
  color: ${(theme: themeType) => theme.colors?.primary};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${(theme: themeType) => theme.colors?.primary};
  }

  &:hover {
    color: ${(theme: themeType) => theme.colors?.highlight};

    svg {
      fill: ${(theme: themeType) => theme.colors?.highlight};
    }
  }

  @media ${device.mobileL} {
    font-size: 1rem;
    flex-direction: column;
    gap: 0;
    svg {
      width: 1.2rem;
    }
  }
`;

export default GlobalStyles;
