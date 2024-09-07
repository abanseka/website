import { ProjectCardProps } from "types/common";
import GitHubIcon from "@assets/github.svg";
import LiveIcon from "@assets/link.svg";
import ImageHolder from "@assets/ImgHolder.svg";

const projectCardImageStyle = {
  width: "5rem",
  height: "5rem",
};

type projectType = "contributedTo" | "personal";

export const projectData: Record<projectType, ProjectCardProps[]> = {
  contributedTo: [
    {
      projectTitle: "Nokhbah Academy",
      projectDescription: "Arabian Based LMS application",
      siteLink: "https://app.nokhbah.academy/en",
      projectLiveIcon: <LiveIcon />,
      headerImage: <ImageHolder style={projectCardImageStyle} />,
    },
    {
      projectTitle: "Archis Academy",
      projectDescription: "Turkish Based Ed.Tech Company",
      siteLink: "https://www.archisacademy.com",
      projectLiveIcon: <LiveIcon />,
      headerImage: <ImageHolder style={projectCardImageStyle} />,
    },
    {
      projectTitle: "DepoBurasi",
      projectDescription: "Turkish Based Ecommerce Platform",
      siteLink: "https://www.depoburda.com",
      projectLiveIcon: <LiveIcon />,
      headerImage: <ImageHolder style={projectCardImageStyle} />,
    },
  ],
  personal: [
    {
      projectTitle: "Personal Webstite",
      projectDescription: "My Corner of the internet",
      siteLink: "https://abanseka.vercel.app/",
      repoLink: "https://github.com/abanseka/website",
      projectIcon: <GitHubIcon />,
      headerImage: <ImageHolder style={projectCardImageStyle} />,
    },
  ],
};
