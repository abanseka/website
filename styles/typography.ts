import styled from "styled-components";
import { device, font, theme } from "theme";

type fontType = {
  fs?: string;
  fw?: number;
  lh?: number;
  tt?: string;
};

const { primary } = theme.colors;
const { fontSize, fontWeight, lineHeight, textTransform } = font;
const text = styled.p<fontType>`
  font-weight: ${({ fw }) => fw ?? fontWeight.normal};
  line-height: ${({ lh }) => lh ?? lineHeight.narrow};
  font-size: ${({ fs }) => fs ?? fontSize.normal};
  color: ${({ color }) => color ?? primary};
  text-transform: ${({ tt }) => tt ?? textTransform.capz};
`;

export const SmallText = styled(text)`
  font-size: ${fontSize.small};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: ${fontSize.tiny};
  }
`;

export const NormalText = styled(text)`
  line-height: ${lineHeight.wide};
  @media ${device.tablet} {
    word-break: break-word;
    font-size: ${fontSize.small};
    line-height: ${lineHeight.rs};
  }
`;

export const TitleText = styled(text)`
  line-height: ${lineHeight.wide};
  font-weight: ${fontWeight.bold};
  @media ${device.mobileL} {
    word-break: break-word;
    font-size: ${fontSize.normal};
  }
`;
