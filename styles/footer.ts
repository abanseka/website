import styled from "styled-components";
import { device } from "theme";

export const FooterStyled = styled.footer`
  max-width: 42rem;
  margin: auto;
  padding: 1rem 0.625rem 2rem;

  @media ${device.tablet} {
    p {
      text-align: center;
    }
  }
`;
