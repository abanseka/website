import styled from "styled-components";
import { theme } from "theme";

export const PostCardStyled = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.625rem;
  background: ${theme.colors.dimmed};
  transition: all 0.3s ease-in-out;

  h2 {
    color: ${theme.colors.accent};
  }

  &:hover {
    cursor: pointer;
    color: ${theme.colors.offWhite};
    background: ${theme.colors.accent};

    h2 {
      color: ${theme.colors.offWhite};
    }
  }

  &:active {
    background: ${theme.colors.highlight};
  }
`;
