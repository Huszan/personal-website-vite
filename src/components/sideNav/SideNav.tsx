import "./SideNav.scss";
import { SectionBubbles } from "../sectionBubbles/SectionBubbles";
import { SectionsHookData } from "../../hooks/UseSections";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ButtonToggle } from "../buttonToggle/ButtonToggle";
import { GlobalContext } from "../../context/GlobalContextComponent";

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

  return (
    <div className="side-nav-wrapper">
      <nav>
        <SectionBubbles sectionsHook={sectionsHook} plane={"horizontal"} />
        <div className="options-box">
          <ButtonToggle
            icon={faCrosshairs}
            state={isAutoAlign}
            setState={setIsAutoAlign}
          />
        </div>
      </nav>
    </div>
  );
}
