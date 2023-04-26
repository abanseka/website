import Link from "next/link";
import styled from "styled-components";
import { device, theme } from "theme";

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  transition: all 0.2s ease-in-out;

  svg {
    width: 1.625rem;
    height: 1.625rem;
    fill: ${theme.colors?.primary};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: ${theme.colors.highlight};
    svg {
      scale: 1.2;
    }
  }

  @media ${device.tablet} {
    font-size: 0.9rem;
    flex-direction: column;
    gap: 0;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const LinkIcon = styled(Link)`
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${theme.colors?.primary};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: ${theme.colors.highlight};
    svg {
      scale: 1.2;
    }
  }
`;
