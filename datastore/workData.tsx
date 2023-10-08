import { WorkCardProps } from "types/common";
import RepoLinkIcon from "@assets/codelink.svg";
import Villa from "@assets/villa.svg";

const workCardImageStyle = {
  width: "5rem",
  height: "5rem",
};

export const workData: WorkCardProps[] = [
  {
    workTitle: "Personal Webstite",
    workDescription: "My Corner of the internet",

    siteLink: "https://abanseka.vercel.app/",
    repoLink: "https://github.com/abanseka/website",

    codeLinkIcon: <RepoLinkIcon />,
    headerImage: <Villa style={ workCardImageStyle } />,
  },
];
