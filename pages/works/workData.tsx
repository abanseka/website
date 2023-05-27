import { CSSProperties } from "styled-components";
import { WorkCardProps } from "types/common";
import SiteLinkIcon from "@assets/link.svg";
import RepoLinkIcon from "@assets/codelink.svg";
import Villa from "@assets/villa.svg";
import Shield from "@assets/shield.svg";

const workCardImageStyle: CSSProperties = {
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
    headerImage: <Villa style={workCardImageStyle} />,
  },
  {
    workTitle: "Viginere Cipher",
    workDescription: "A mini ecryption application ",

    siteLink: "https://viginerecipher-begonia-9b5138.netlify.app/",
    repoLink: "https://github.com/abanseka/viginere-cipher",

    siteLinkIcon: <SiteLinkIcon />,
    codeLinkIcon: <RepoLinkIcon />,
    headerImage: <Shield style={workCardImageStyle} />,
  },
];
