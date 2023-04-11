import styled from "styled-components";

export const NavBar = styled.nav`
  width: 80%;
  max-width: 810px;
  margin: auto;
  padding: ${({ pd }: { pd?: string }) => pd};
`;

export const Span = styled.span`
  font-weight: 800;
  font-size: 2rem;
  color: ${({ color = "black" }: { color?: string }) => color};
`;

export const LogoText = styled.h1`
  width: fit-content;
`;

export const HeadLine = styled.p`
  line-height: 1;
  font-size: 1.25rem;
  font-weight: 500;
`;
