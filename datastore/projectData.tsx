import { ProjectCardProps } from "types/common";
import GitHubIcon from "@assets/github.svg";
import ImageHolder from "@assets/ImgHolder.svg";

const projectCardImageStyle = {
  width: "5rem",
  height: "5rem",
};

export const projectData: ProjectCardProps[] = [
  {
    projectTitle: "Personal Webstite",
    projectDescription: "My Corner of the internet",

    siteLink: "https://abanseka.vercel.app/",
    repoLink: "https://github.com/abanseka/website",

    projectIcon: <GitHubIcon />,
    headerImage: <ImageHolder style={projectCardImageStyle} />,
  },
];
