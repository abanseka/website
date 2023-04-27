import Image from "next/image";
import styled from "styled-components";
import { device, theme } from "theme";
import { FlexContainer } from "./flex";

export const NavBar = styled.nav`
  max-width: 42rem;
  margin: auto;
  padding: ${({ pd }: { pd?: string }) => pd};

  @media ${device.tablet} {
    .navbar {
      flex-direction: column-reverse;
      align-items: center;

      .details {
        align-items: center;
      }
    }
  }
`;

export const Word = styled.span`
  font-weight: 800;
  font-size: 2rem;
  color: ${({ cl = "black" }: { cl?: string }) => cl};
  @media ${device.mobileL} {
    font-size: 1.625rem;
  }
`;

export const LogoText = styled.h1`
  width: fit-content;
`;

export const ProfilePhoto = styled(Image)`
  width: 5rem;
  border-radius: 3rem;
  @media ${device.mobileL} {
    width: 3.5rem;
  }
`;

export const Ring = styled(FlexContainer)`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 3rem;
  background: ${theme.colors.highlight};
  @media ${device.mobileL} {
    width: 4rem;
    height: 4rem;
  }
`;
