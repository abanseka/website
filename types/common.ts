import { ReactNode } from "react";

export type NoteProps = {
  title: string;
  url: string;
  description?: string;
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
