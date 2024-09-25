import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faElectron } from "../assets/icons/fa-electron";
import { faTs } from "../assets/icons/fa-ts";
import { faSql } from "../assets/icons/fa-sql";

interface Skill {
  name: string;
  icon: IconDefinition;
  color: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: faReact,
    color: "#60F5FC",
  },
  {
    name: "TypeScript",
    icon: faTs,
    color: "#0076C6",
  },
  {
    name: "JavaScript",
    icon: faJs,
    color: "#EFD81D",
  },
  {
    name: "HTML",
    icon: faHtml5,
    color: "#E64D21",
  },
  {
    name: "CSS",
    icon: faCss3,
    color: "#1772B8",
  },
  {
    name: "git",
    icon: faGitAlt,
    color: "#E84D31",
  },
  {
    name: "Electron",
    icon: faElectron,
    color: "#2A2D38",
  },
  {
    name: "SQL",
    icon: faSql,
    color: "#2A2D38",
  },
];

export { skills };
