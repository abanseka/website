import Head from "next/head";
import Link from "next/link";
import { WorkCardProps } from "types/common";
import { workData } from "./workData";
import style from "./work.module.scss";

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
