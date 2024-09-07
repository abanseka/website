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
  repoLink: string;
  projectTitle: string;
  projectIcon: ReactNode;
  headerImage: ReactNode;
  projectDescription: string;
  projectLiveIcon?: ReactNode;
}
