import styled from "styled-components";
import { themeType } from "types/common";
import { device } from "theme";

export const FooterStyled = styled.footer`
  flex-direction: column;
  position: absolute;
  bottom: 1.5rem;

  & p {
    font-size: 1.1rem;
    line-height: 1.2;
    color: ${(theme: themeType) => theme.colors.dimmed};

    @media ${device.tablet} {
      text-align: center;
      font-size: 1rem;
    }
  }

  @media ${device.tablet} {
    left: 0;
    right: 0;
    margin: 0 auto;
    align-items: center;
  }
`;
