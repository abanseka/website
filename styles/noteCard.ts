import Link from "next/link";
import styled from "styled-components";
import { theme } from "theme";

const { primary, dimmed, offWhite } = theme.colors;

export const NoteCardStyled = styled(Link)`
  width: 100%;
  padding: 1rem;
  border-radius: 0.625rem;
  background: ${dimmed};
  border: 2px solid ${primary};
  text-decoration: none !important;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${primary};

    p,
    h2 {
      color: ${offWhite};
    }
  }
`;
