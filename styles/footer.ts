import styled from "styled-components";
import { device } from "theme";

export const FooterStyled = styled.footer`
  max-width: 42rem;
  margin: 12.5rem auto 3rem;

  @media ${device.tablet} {
    p {
      text-align: center;
    }
  }
`;
