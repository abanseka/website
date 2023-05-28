import Head from "next/head";
import Link from "next/link";
import { WorkCardProps } from "types/common";
import SiteLinkIcon from "@assets/link.svg";
import RepoLinkIcon from "@assets/codelink.svg";
import Villa from "@assets/villa.svg";
import Shield from "@assets/shield.svg";
import style from "./work.module.scss";

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

const WorkCard = (work: WorkCardProps) => (
  <article className={style.workcard}>
    {work.headerImage}
    <h3 className={style.worktitle}>{work.workTitle}</h3>
    <p className={style.workdescription}>{work.workDescription}</p>

    {/* prettier-ignore */}
    <div className={style.linkcontainer}>
      <Link className={style.worklink} href={work.siteLink}> {work.siteLinkIcon} </Link>
      <Link className={style.worklink} href={work.repoLink}> {work.codeLinkIcon} </Link>
    </div>
  </article>
);

const index = () => (
  <>
    <Head>
      <title>Work</title>
      <meta name="description" content="abanseka's projects" />
      <link rel="icon" href="/branch_favicon.png" />
    </Head>

    <section className={style.workpage}>
      {workData.map((work: WorkCardProps, idx) => (
        <WorkCard
          key={idx}
          repoLink={work.repoLink}
          siteLink={work.siteLink}
          workTitle={work.workTitle}
          headerImage={work.headerImage}
          siteLinkIcon={work.siteLinkIcon}
          codeLinkIcon={work.codeLinkIcon}
          workDescription={work.workDescription}
        />
      ))}
    </section>
  </>
);

export default index;
