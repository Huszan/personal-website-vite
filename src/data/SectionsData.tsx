import {
  faProjectDiagram,
  faShoePrints,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { SectionRecords } from "../hooks/UseSections";

export const sectionsData: SectionRecords = {
  0: {
    name: "About me",
    icon: faUser,
    index: 0,
    useBubble: true,
  },
  1: {
    name: "Education",
    icon: faUniversity,
    index: 1,
    useBubble: true,
  },
  2: {
    name: "Projects",
    icon: faProjectDiagram,
    index: 2,
    useBubble: true,
  },
  3: {
    name: "Footer",
    icon: faShoePrints,
    index: 3,
    useBubble: false,
  },
};
