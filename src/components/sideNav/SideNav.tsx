import "./SideNav.scss";
import { SectionBubbles } from "../sectionBubbles/SectionBubbles";
import { SectionsHookData } from "../../hooks/UseSections";
import { faCrosshairs, faLock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useMemo } from "react";
import { ButtonToggle } from "../buttonToggle/ButtonToggle";
import { GlobalContext } from "../../context/GlobalContextComponent";
import { useTimeActivator } from "../../hooks/UseTimeActivator";
import { usePointerInArea } from "../../hooks/UsePointerInArea";

export interface SideNavProps {
  sectionsHook: SectionsHookData;
}

export function SideNav(props: SideNavProps) {
  const { config, windowSize } = useContext(GlobalContext)!;
  const [isAutoAlign, setIsAutoAlign] = [
    config.centerOnSection,
    config.setCenterOnSection,
  ];
  const { sectionsHook } = props;
  const scrollActivator = useTimeActivator({
    intervalMS: 2000,
    event: "scroll",
  });
  const { isInArea: isPointerInTriggerArea } = usePointerInArea({
    xLim: {
      min: windowSize.width ? windowSize.width - 70 : 0,
      max: windowSize.width ? windowSize.width : 0,
    },
    yLim: {
      min: 0,
      max: windowSize.height ? windowSize.height : Number.MAX_SAFE_INTEGER,
    },
  });

  const isVisible = useMemo(() => {
    return (
      config.isSideBarLocked ||
      scrollActivator.isActive ||
      isPointerInTriggerArea
    );
  }, [
    config.isSideBarLocked,
    scrollActivator.isActive,
    isPointerInTriggerArea,
  ]);

  return (
    <div className={`${"side-nav-wrapper"}${isVisible ? "" : " hidden"}`}>
      <nav>
        <SectionBubbles sectionsHook={sectionsHook} plane={"horizontal"} />
        <div className="options-box">
          <ButtonToggle
            icon={faCrosshairs}
            state={isAutoAlign}
            setState={setIsAutoAlign}
          />
          <ButtonToggle
            icon={faLock}
            state={config.isSideBarLocked}
            setState={config.setIsSideBarLocked}
          />
        </div>
      </nav>
    </div>
  );
}
