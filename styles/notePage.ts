import styled from "styled-components";
import { device, theme } from "theme";

export const NotePage = styled.article`
  min-height: calc(50dvh - 10rem);

  p,
  li,
  a {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  a {
    font-weight: 600;
    color: ${theme.colors.highlight};
  }

  p,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  code {
    margin: 2rem 0;
  }

  ol,
  ul {
    padding: 0 1.25rem;
    margin-bottom: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.highlight};
  }

  img {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid ${theme.colors.accent};
  }

  @media ${device.tablet} {
    font-size: 0.875rem;
    padding: 0 0.625rem;
  }

  pre {
    padding: 1rem;
    font-size: 0.825rem;
    line-height: 1.5rem;
    letter-spacing: 0.025em;
    border-radius: 0 0 5px 5px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    code {
      display: grid;
      counter-reset: line;

      .line::before {
        content: counter(line);
        display: inline-block;
        width: 1rem;
        margin-right: 2rem;
        text-align: right;
        color: gray;
        counter-increment: line;
      }
    }

    @media ${device.tablet} {
      font-size: 0.625rem;
      line-height: 1rem;
    }
  }

  [data-rehype-pretty-code-title] {
    font-size: 0.875rem;
    padding: 0.2rem 0.5rem;
    border-radius: 5px 5px 0 0;
    color: ${theme.colors.offWhite};
    background: ${theme.colors.accent};

    @media ${device.tablet} {
      font-size: 0.625rem;
    }
  }
`;
