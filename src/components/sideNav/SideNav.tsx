import "./SideNav.scss";
import { SectionBubbles } from "../sectionBubbles/SectionBubbles";
import { SectionsHookData } from "../../hooks/UseSections";
import {
  faChevronLeft,
  faChevronRight,
  faCrosshairs,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useMemo, useState } from "react";
import { ButtonToggle } from "../buttonToggle/ButtonToggle";
import { GlobalContext } from "../../context/GlobalContextComponent";
import { useTimeActivator } from "../../hooks/UseTimeActivator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SideNavProps {
  sectionsHook: SectionsHookData;
}

export function SideNav(props: SideNavProps) {
  const { config } = useContext(GlobalContext)!;
  const [isAutoAlign, setIsAutoAlign] = [
    config.centerOnSection,
    config.setCenterOnSection,
  ];
  const { sectionsHook } = props;
  const scrollActivator = useTimeActivator({
    intervalMS: 600,
    event: "scroll",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const isVisible = useMemo(() => {
    return isExpanded || config.isSideBarLocked || scrollActivator.isActive;
  }, [isExpanded, config.isSideBarLocked, scrollActivator.isActive]);

  return (
    <div className={`${"side-nav-wrapper"}${isVisible ? "" : " hidden"}`}>
      <nav>
        {!config.isSideBarLocked && (
          <button className="toggle-visibility" onClick={toggleExpanded}>
            {!isExpanded && <FontAwesomeIcon icon={faChevronLeft} />}
            {isExpanded && <FontAwesomeIcon icon={faChevronRight} />}
          </button>
        )}
        <SectionBubbles sectionsHook={sectionsHook} plane={"horizontal"} />
        <div className="options-box">
          <ButtonToggle
            iconEnabled={faCrosshairs}
            state={isAutoAlign}
            setState={setIsAutoAlign}
          />
          <ButtonToggle
            iconEnabled={faLock}
            iconDisabled={faLockOpen}
            state={config.isSideBarLocked}
            setState={config.setIsSideBarLocked}
          />
        </div>
      </nav>
    </div>
  );
}
