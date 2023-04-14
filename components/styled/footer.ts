import styled from "styled-components";
import { device, theme } from "theme";

export const FooterStyled = styled.footer`
  max-width: 42rem;
  margin: 0 auto 2rem;

  & p {
    color: ${theme.colors.dimmed};
    @media ${device.tablet} {
      text-align: center;
    }
  }

  @media ${device.tablet} {
    align-items: center;
  }
`;
