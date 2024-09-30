import "./Content.scss";
import { MutableRefObject, useEffect, useRef } from "react";
import { SectionsHookData } from "../../hooks/UseSections";
import WelcomeSection from "../welcomeSection/WelcomeSection";
import QualificationsSection from "../qualificationsSection/QualificationsSection";
import SkillsSection from "../techSection/SkillsSection";
import ProjectsSection from "../projectsSection/ProjectsSection";

export interface ContentProps {
  sectionsHook: SectionsHookData;
}

export function Content(props: ContentProps) {
  const refWelcome: MutableRefObject<HTMLElement | null> = useRef(null);
  const refQualifications: MutableRefObject<HTMLElement | null> = useRef(null);
  const refSkills: MutableRefObject<HTMLElement | null> = useRef(null);
  const refProjects: MutableRefObject<HTMLElement | null> = useRef(null);

  const { sectionsHook } = props;
  const shRef = useRef(sectionsHook);

  useEffect(() => {
    if (!refWelcome.current) return;
    shRef.current.setSectionElement("welcome", refWelcome.current);
  }, [refWelcome]);

  useEffect(() => {
    if (!refQualifications.current) return;
    shRef.current.setSectionElement(
      "qualifications",
      refQualifications.current
    );
  }, [refQualifications]);

  useEffect(() => {
    if (!refSkills.current) return;
    shRef.current.setSectionElement("skills", refSkills.current);
  }, [refSkills]);

  useEffect(() => {
    if (!refProjects.current) return;
    shRef.current.setSectionElement("projects", refProjects.current);
  }, [refProjects]);

  return (
    <div id="content">
      <WelcomeSection ref={refWelcome} />
      <QualificationsSection ref={refQualifications} />
      <SkillsSection ref={refSkills} />
      <ProjectsSection ref={refProjects} />
    </div>
  );
}
