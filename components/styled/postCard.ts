import styled from "styled-components";
import { themeType } from "types/common";

export const PostCardStyled = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.625rem;
  background: ${(theme: themeType) => theme.colors.dimmed};

  h2 {
    color: ${(theme: themeType) => theme.colors.accent};
  }

  &:hover {
    cursor: pointer;
    color: ${(theme: themeType) => theme.colors.offWhite};
    background: ${(theme: themeType) => theme.colors.accent};

    h2 {
      color: ${(theme: themeType) => theme.colors.offWhite};
    }
  }

  &:active {
    background: ${(theme: themeType) => theme.colors.highlight};
  }
`;
