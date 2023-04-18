import styled from "styled-components";
import { device, theme } from "theme";

export const FooterStyled = styled.footer`
  max-width: 42rem;
  margin: auto;
  padding: 1rem 0.625rem;
  background: ${theme.colors.offWhite};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2rem;
  z-index: 1;

  @media ${device.tablet} {
    p {
      text-align: center;
    }
  }
`;
