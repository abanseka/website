import styled from "styled-components";
import { device } from "theme";

type text = { ta?: "left" | "center" | "right" };
export const SmallText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  text-align: ${({ ta = "left" }: text) => ta};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: 0.8rem;
  }
`;

export const NormalText = styled.p`
  line-height: 1;
  font-weight: 400;
  font-size: 1.125rem;
  text-align: ${({ ta }: text) => ta};
  @media ${device.tablet} {
    word-break: break-word;
    font-size: 0.8rem;
    line-height: unset;
  }
`;

export const TitleText = styled.h2`
  line-height: 1.2;
  font-weight: 500;
  font-size: 1.125rem;
  text-transform: capitalize;
  text-align: ${({ ta = "left" }: text) => ta};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: 1rem;
  }
`;
