import Head from "next/head";
import Link from "next/link";
import { ProjectCardProps } from "types/common";
import { projectData } from "datastore/projectData";
import { CSSProperties } from "react";
import ProjectIcon from "@assets/projects.svg";
import ContributeIcon from "@assets/contribute.svg";
import style from "./project.module.scss";

const ProjectCard = (project: ProjectCardProps) => (
  <article className={style.projectcard}>
    {project.headerImage}

    <Link className={style.projectLink} href={project.siteLink}>
      <h3 className={style.projectTitle}>{project.projectTitle}</h3>
    </Link>

    <p className={style.projectDescription}>{project.projectDescription}</p>

    <div className={style.linkContainer}>
      {project.repoLink && (
        <Link className={style.projectLink} href={project.repoLink}>
          {project.projectIcon}
        </Link>
      )}
    </div>
  </article>
);

const index = () => {
  const chipIconstyle: CSSProperties = {
    width: "1rem",
    height: "1rem",
  };

  const chipContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
  };

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="abanseka's projects" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <section className={style.projectsPage}>
        <h3 style={chipContainerStyle} className={style.projectsDivider}>
          <ProjectIcon style={chipIconstyle} />
          Projects
        </h3>

        <div className={style.projectContainer}>
          {projectData.personal.map((project: ProjectCardProps, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <h3 style={chipContainerStyle} className={style.projectsDivider}>
          <ContributeIcon style={chipIconstyle} />
          Contributed To
        </h3>

        <div className={style.projectContainer}>
          {projectData.contributedTo.map((project: ProjectCardProps, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
