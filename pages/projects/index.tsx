import Head from "next/head";
import Link from "next/link";
import { ProjectCardProps } from "types/common";
import { projectData } from "datastore/projectData";
import style from "./project.module.scss";

const ProjectCard = (project: ProjectCardProps) => (
  <article className={style.projectcard}>
    {project.headerImage}
    <h3 className={style.projectTitle}>{project.projectTitle}</h3>
    <p className={style.projectDescription}>{project.projectDescription}</p>

    <div className={style.linkContainer}>
      <Link className={style.projectLink} href={project.repoLink}>
        {project.projectIcon}
      </Link>

      <Link className={style.projectLink} href={project.siteLink}>
        {project.projectLiveIcon}
      </Link>
    </div>
  </article>
);

const index = () => (
  <>
    <Head>
      <title>Projects</title>
      <meta name="description" content="abanseka's projects" />
      <link rel="icon" href="/branch_favicon.png" />
    </Head>

    <section className={style.projectsPage}>
      {projectData.map((project: ProjectCardProps, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </section>
  </>
);

export default index;
