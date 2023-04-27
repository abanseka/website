import styled from "styled-components";
import { device, theme } from "theme";

export const NotePage = styled.article`
  min-height: calc(50dvh - 10rem);
  padding: 0 1.25rem;
  color: ${theme.colors.accent};

  p,
  li,
  a {
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: 0.625rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  hr {
    margin: 2rem auto;
    width: 60%;
  }

  @media ${device.tablet} {
    font-size: 0.875rem;
  }
`;
