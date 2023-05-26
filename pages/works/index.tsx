import Head from "next/head";
import { theme } from "theme";
import { CSSProperties } from "styled-components";
import { WorkCardProps } from "types/common";
import { WorkPage } from "@styledComponents/workpage";
import WorkCard from "@components/widgets/workCard";
import Shield from "@assets/shield.svg";
import Villa from "@assets/villa.svg";
import SiteLinkIcon from "@assets/link.svg";
import RepoLinkIcon from "@assets/codelink.svg";

const index = () => {
  const { highlight } = theme.colors;

  const workCardImageStyle: CSSProperties = {
    width: "5rem",
    height: "5rem",
    fill: highlight,
  };

  const works: WorkCardProps[] = [
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

  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="abanseka's projects" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <>
        <WorkPage gp={1} jc="space-around" className="workpage" fw="wrap">
          {works.map(
            (
              {
                siteLink,
                repoLink,
                workTitle,
                headerImage,
                codeLinkIcon,
                siteLinkIcon,
                workDescription,
              }: WorkCardProps,
              idx
            ) => (
              <WorkCard
                key={idx}
                repoLink={repoLink}
                siteLink={siteLink}
                workTitle={workTitle}
                headerImage={headerImage}
                siteLinkIcon={siteLinkIcon}
                codeLinkIcon={codeLinkIcon}
                workDescription={workDescription}
              />
            )
          )}
        </WorkPage>
      </>
    </>
  );
};

export default index;
