import { ReactNode } from "react";

export type themeType = {
  colors: {
    accent: string;
    offWhite: string;
    primary: string;
    highlight: string;
    dimmed: string;
  };
};

export type screens = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
};

export type post = {
  id: number;
  title: string;
  content: string;
  summary: string;
};

export interface WorkCardProps {
  siteLink: string;
  repoLink: string;
  workTitle: string;
  codeLinkIcon: ReactNode;
  headerImage: ReactNode;
  workDescription: string;
  siteLinkIcon?: ReactNode;
}
