import styled from "styled-components";
import { device, theme } from "theme";

export const NotePage = styled.article`
  padding: 0 1.25rem;
  min-height: calc(50dvh - 10rem);

  p,
  li,
  a {
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.625rem;
  }

  a {
    font-weight: 600;
    color: ${theme.colors.highlight};
  }

  ol,
  ul {
    padding: 0 1.25rem;
    margin-bottom: 2rem;
  }

  hr {
    margin: 2rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.2rem 0;
    color: ${theme.colors.highlight};
  }

  pre {
    border-radius: 5px;
  }

  img {
    border-radius: 10px;
  }

  @media ${device.tablet} {
    font-size: 0.875rem;
    padding: 0 0.625rem;
  }
`;
