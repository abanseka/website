import { screens, themeType } from "types/common";

export const theme: themeType = {
  colors: {
    accent: "#222330",
    primary: "#222330",
    offWhite: "#FFECEB",
    highlight: "#FF6400",
    dimmed: "#AFA1BF",
  },
};

const screens: screens = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "650px", //🔖 between mobile & tablet
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device: screens = {
  mobileS: `(max-width: ${screens.mobileS})`,
  mobileM: `(max-width: ${screens.mobileM})`,
  mobileL: `(max-width: ${screens.mobileL})`,
  tablet: `(max-width: ${screens.tablet})`,
  laptop: `(max-width: ${screens.laptop})`,
  laptopL: `(max-width: ${screens.laptopL})`,
  desktop: `(max-width: ${screens.desktop})`,
};

export const font: {
  fontSize: {
    tiny: string;
    small: string;
    normal: string;
    medium: string;
    large: string;
  };
  fontWeight: { normal: number; medium: number; bold: number };
  lineHeight: { narrow: number; wide: number; rs: string };
  textTransform: { caps: string; small: string; capz: string };
} = {
  fontSize: {
    tiny: "0.75rem", // 12px
    small: "0.875rem", // 14px
    normal: "1rem", // 16px
    medium: "1.5rem", // 24px
    large: "2rem", // 32px
  },
  fontWeight: { normal: 400, medium: 500, bold: 600 },
  lineHeight: { narrow: 1, wide: 1.2, rs: "unset" },
  textTransform: { caps: "uppercase", small: "lowercase", capz: "capitalise" },
};
