import { forwardRef } from "react";
import { projectsData } from "../../data/ProjectsData";
import "./ProjectsSection.scss";
import ProjectCard from "../projectCard/ProjectCard";
import Carousel from "../carousel/Carousel";

const ProjectsSection = forwardRef<HTMLElement>((_props, ref) => {
  const projectCards = projectsData.map((project) => {
    return <ProjectCard key={project.title} project={project} />;
  });

  return (
    <section className="main-section projects-section" ref={ref}>
      <h1>Side Projects</h1>
      <Carousel>{projectCards}</Carousel>
    </section>
  );
});

export default ProjectsSection;
