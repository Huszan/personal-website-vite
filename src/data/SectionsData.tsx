import {
  faGear,
  faHandshake,
  faProjectDiagram,
  faShoePrints,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { SectionRecords } from "../hooks/UseSections";

export const sectionsData: SectionRecords = {
  welcome: {
    name: "Welcome",
    icon: faHandshake,
    useBubble: true,
  },
  qualifications: {
    name: "Qualifications",
    icon: faUniversity,
    useBubble: true,
  },
  skills: {
    name: "Skills",
    icon: faGear,
    useBubble: true,
  },
  projects: {
    name: "Projects",
    icon: faProjectDiagram,
    useBubble: true,
  },
  footer: {
    name: "Footer",
    icon: faShoePrints,
    useBubble: true,
  },
};
