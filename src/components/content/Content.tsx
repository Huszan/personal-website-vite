import './Content.scss';
import { MutableRefObject, useEffect, useRef } from 'react';
import { SectionsHookData } from '../../hooks/UseSections';
import { WelcomeSection } from '../welcomeSection/WelcomeSection';

export interface ContentProps {
  sectionsHook: SectionsHookData;
}

export function Content(props: ContentProps) {
  const refWelcome: MutableRefObject<HTMLElement | null> = useRef(null);
  const refEducation: MutableRefObject<HTMLElement | null> = useRef(null);
  const refProjects: MutableRefObject<HTMLElement | null> = useRef(null);

  const { sectionsHook } = props;

  useEffect(() => {
    if (props.sectionsHook.get['0'].element || !refWelcome.current) return;
    sectionsHook.setSectionElement('0', refWelcome);
  }, [refWelcome]);

  useEffect(() => {
    if (props.sectionsHook.get['1'].element || !refEducation.current) return;
    sectionsHook.setSectionElement('1', refEducation);
  }, [refEducation]);

  useEffect(() => {
    if (props.sectionsHook.get['2'].element || !refProjects.current) return;
    sectionsHook.setSectionElement('2', refProjects);
  }, [refProjects]);

  return (
    <div id="content">
      <WelcomeSection ref={refWelcome} />
      <section ref={refEducation}></section>
      <section ref={refProjects}></section>
    </div>
  );
}
