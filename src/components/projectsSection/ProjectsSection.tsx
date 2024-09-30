import { forwardRef } from "react";
import { projectsData } from "../../data/ProjectsData";
import "./ProjectsSection.scss";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const projectCards = projectsData.map((project) => {
    return (
      <li key={project.title}>
        <ProjectCard project={project} />
      </li>
    );
  });

  return (
    <section className="main-section projects-section" ref={ref}>
      <h1>Side Projects</h1>
      <ul className="project-card-list">{projectCards}</ul>
    </section>
  );
});

export default ProjectsSection;
