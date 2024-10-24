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
    paddingInline: 20,
    fontSize: 12,
    gap: 8,
  };

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="abanseka's projects" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <div style={{ marginBlockEnd: 40, paddingInline: 20 }}>
        <p style={{ fontSize: 12, marginBlock: 10 }}>my explorations 🔬</p>
        <div
          style={{
            height: 500,
            borderRadius: 4,
            border: "2px solid lightgray",
          }}
        >
          <img
            alt="mr rabbit"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src="https://i.pinimg.com/enabled_hi/564x/a1/43/e6/a143e624615b3997f2018359cff10a2f.jpg"
          />

          {/* prettier-ignore */}
          <a 
            href="https://www.pinterest.com/pin/2392606046257366/"
            style={{ fontSize: 12, marginBlock: 10,color:"teal",textDecoration:"none" }}> arts by Kiri Oof on Pinterest</a>
        </div>
      </div>

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
