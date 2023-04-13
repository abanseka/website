import styled from "styled-components";
import { themeType } from "types/common";
import { device } from "theme";

export const FooterStyled = styled.footer`
  width: 42rem;
  margin: auto;
  flex-direction: column;
  margin: 0 auto 2rem;

  & p {
    color: ${(theme: themeType) => theme.colors.dimmed};
    @media ${device.tablet} {
      text-align: center;
    }
  }

  @media ${device.tablet} {
    align-items: center;
  }
`;
