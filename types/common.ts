import { ReactNode } from "react";

export type navLink = {
  id: number;
  label: string;
  href: string;
  icon?: ReactNode;
  renderSocialIcon?: boolean;
};

export type NoteProps = {
  title: string;
  url: string;
  description?: string;
};

export interface ProjectCardProps {
  siteLink: string;
  projectTitle: string;
  headerImage: ReactNode;
  projectDescription: string;
  repoLink?: string;
  projectIcon?: ReactNode;
  projectLiveIcon?: ReactNode;
}
