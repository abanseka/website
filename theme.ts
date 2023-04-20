import { screens, themeType } from "types/common";

export const theme: themeType = {
  colors: {
    accent: "#343a40",
    primary: "#6c757d",
    offWhite: "#f8f9fa",
    highlight: "#d84f37",
    dimmed: "#ced4da",
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
