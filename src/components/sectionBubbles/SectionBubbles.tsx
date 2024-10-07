import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SectionBubbles.scss";
import { SectionsHookData } from "../../hooks/UseSections";
import { scrollToElementTop } from "../../utils/BaseUtils";

export interface SectionBubblesProps {
  sectionsHook: SectionsHookData;
  plane: "horizontal" | "vertical";
}

export function SectionBubbles(props: SectionBubblesProps) {
  const { sectionsHook, plane } = props;

  if (!sectionsHook.get) return;

  const nodeElements = Object.entries(sectionsHook.get).map(
    ([key, section]) => {
      const isActive = sectionsHook.activeSectionKey === key;

      const selectElement = () => scrollToElementTop(section.element);

      return (
        <li
          key={key}
          className={isActive ? "selected" : ""}
          onClick={selectElement}
        >
          <div className="section-selector">
            <FontAwesomeIcon className="ico" icon={section.icon} />
          </div>
        </li>
      );
    }
  );

  const progressPointerStyle = {
    "--progress": `${(Number(sectionsHook.viewProgress) * 100).toFixed(1)}%`,
  } as React.CSSProperties;

  return (
    <ul className={`section-bubbles ${plane}`} style={progressPointerStyle}>
      <div className="progress-pointer-box">
        <div className="progress-pointer"></div>
      </div>
      {nodeElements}
    </ul>
  );
}
