import Head from "next/head";
import { theme } from "theme";
import { FlexContainer } from "@styledComponents/flex";
import WorkCard from "@components/widgets/workCard";
import { WorkCardProps } from "types/common";
import { CSSProperties } from "styled-components";
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
      workerDescription: "My Corner of the internet",

      siteLink: "https://abanseka.vercel.app/",
      repoLink: "https://github.com/abanseka/website",

      codeLinkIcon: <RepoLinkIcon />,
      headerImage: <Villa style={workCardImageStyle} />,
    },
    {
      workTitle: "Viginere Cipher",
      workerDescription: "A mini ecryption application ",

      siteLink: "https://abanseka.vercel.app/",
      repoLink: "https://github.com/abanseka/personal-website",

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
        <FlexContainer
          gp={1}
          jc="space-around"
          className="workpage"
          ma="0 0 5rem"
          fw="wrap"
        >
          {works.map(
            ({
              siteLink,
              repoLink,
              workTitle,
              headerImage,
              codeLinkIcon,
              siteLinkIcon,
              workerDescription,
            }: WorkCardProps) => (
              <WorkCard
                repoLink={repoLink}
                siteLink={siteLink}
                workTitle={workTitle}
                headerImage={headerImage}
                siteLinkIcon={siteLinkIcon}
                codeLinkIcon={codeLinkIcon}
                workerDescription={workerDescription}
              />
            )
          )}
        </FlexContainer>
      </>
    </>
  );
};

export default index;
