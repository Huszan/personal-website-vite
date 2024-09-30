import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "../../data/ProjectsData";
import { Anchor } from "../anchor/Anchor";
import "./ProjectCard.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SeeMore from "../seeMore/SeeMore";
import { CSSProperties } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  const imageStyle: CSSProperties = {
    backgroundImage: project.imageSrc ? `url(${project.imageSrc})` : "",
  };

  return (
    <div className="project-card">
      {project.imageSrc && (
        <div className="project-card--image" style={imageStyle} />
      )}
      <h4 className="project-card--title">{project.title}</h4>
      <SeeMore className="project-card--desc t-sub-2">{project.desc}</SeeMore>
      <Anchor
        className={`view-anchor ${project.siteLink ? "" : " disabled"}`}
        href={project.siteLink ? project.siteLink : ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEye} /> View site
      </Anchor>
      <Anchor
        className={project.gitLink ? "" : "disabled"}
        href={project.gitLink ? project.gitLink : ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> Check out code
      </Anchor>
    </div>
  );
};

export default ProjectCard;
