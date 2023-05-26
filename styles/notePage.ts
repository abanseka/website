import styled from "styled-components";
import { device, theme } from "theme";

const { primary, highlight, offWhite } = theme.colors;

export const NotePage = styled.article`
  min-height: calc(50dvh - 10rem);
  font-weight: 500;

  a {
    color: ${highlight};
    font-weight: 600;
  }

  p,
  hr,
  ol,
  ul,
  code {
    margin: 1.2rem 0;
    font-size: 1.125rem;
  }

  ol,
  ul {
    padding: 0 1.25rem;
    margin-bottom: 1rem;
  }

  strong {
    font-size: 1rem;
    opacity: 0.8;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${highlight};
    margin: 1.2rem 0;
  }

  blockquote {
    padding: 10px;
    margin: 5px 0;
    border-radius: 0.625rem;
    border: 2px solid ${primary};
    p {
      margin: 5px;
    }
  }

  img {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid ${primary};
  }

  @media ${device.tablet} {
    font-size: 0.875rem;
    padding: 0 0.625rem;
  }

  pre {
    padding: 1rem;
    border-radius: 0 0 5px 5px;
    overflow-x: scroll;
    border: 2px solid #69548b;
    border-top: none;

    ::-webkit-scrollbar {
      display: none;
    }

    code {
      display: grid;
      counter-reset: line;
      line-height: 1.5rem;
      font-family: Kanit;
      font-size: 0.875rem;
      font-family: "Titillium Web", sans-serif;

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
    padding: 0.2rem 0.5rem;
    border-radius: 5px 5px 0 0;
    border: 2px solid ${primary};
    border-bottom: none;
    color: ${offWhite};
    background: ${primary};

    @media ${device.tablet} {
      font-size: 0.625rem;
    }
  }
`;
