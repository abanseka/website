import Link from "next/link";
import styled from "styled-components";
import { theme } from "theme";

export const NoteCardStyled = styled(Link)`
  width: 100%;
  padding: 1rem;
  border-radius: 0.625rem;
  background: ${theme.colors.dimmed};
  text-decoration: none !important;
  color: ${theme.colors.accent};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.offWhite};
    background: ${theme.colors.accent};
  }

  &:active {
    background: ${theme.colors.highlight};
  }
`;
