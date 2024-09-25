import "./Content.scss";
import { MutableRefObject, useEffect, useRef } from "react";
import { SectionsHookData } from "../../hooks/UseSections";
import WelcomeSection from "../welcomeSection/WelcomeSection";
import QualificationsSection from "../qualificationsSection/QualificationsSection";
import SkillsSection from "../techSection/SkillsSection";

export interface ContentProps {
  sectionsHook: SectionsHookData;
}

export function Content(props: ContentProps) {
  const refWelcome: MutableRefObject<HTMLElement | null> = useRef(null);
  const refQualifications: MutableRefObject<HTMLElement | null> = useRef(null);
  const refSkills: MutableRefObject<HTMLElement | null> = useRef(null);
  const refProjects: MutableRefObject<HTMLElement | null> = useRef(null);

  const { sectionsHook } = props;

  useEffect(() => {
    if (props.sectionsHook.get["0"].element || !refWelcome.current) return;
    sectionsHook.setSectionElement("0", refWelcome);
  }, [refWelcome]);

  useEffect(() => {
    if (props.sectionsHook.get["1"].element || !refQualifications.current)
      return;
    sectionsHook.setSectionElement("1", refQualifications);
  }, [refQualifications]);

  useEffect(() => {
    if (props.sectionsHook.get["2"].element || !refSkills.current) return;
    sectionsHook.setSectionElement("2", refSkills);
  }, [refSkills]);

  useEffect(() => {
    if (props.sectionsHook.get["3"].element || !refProjects.current) return;
    sectionsHook.setSectionElement("3", refProjects);
  }, [refProjects]);

  return (
    <div id="content">
      <WelcomeSection ref={refWelcome} />
      <QualificationsSection ref={refQualifications} />
      <SkillsSection ref={refSkills} />
      <section className="main-section" ref={refProjects} />
    </div>
  );
}
