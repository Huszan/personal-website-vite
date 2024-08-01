import './Content.scss';
import { MutableRefObject, useEffect, useRef } from 'react';
import { SectionsHookData } from '../../hooks/UseSections';

export interface ContentProps {
    sectionsHook: SectionsHookData,
}

export function Content(props: ContentProps) {
    const refAbout: MutableRefObject<HTMLElement | null> = useRef(null);
    const refEducation: MutableRefObject<HTMLElement | null> = useRef(null);
    const refProjects: MutableRefObject<HTMLElement | null> = useRef(null);

    const { sectionsHook } = props;

    useEffect(() => {
        if (props.sectionsHook.get['0'].element || !refAbout.current) return;
        sectionsHook.setSectionElement('0', refAbout);
    }, [refAbout])

    useEffect(() => {
        if (props.sectionsHook.get['1'].element || !refEducation.current) return;
        sectionsHook.setSectionElement('1', refEducation);
    }, [refEducation])

    useEffect(() => {
        if (props.sectionsHook.get['2'].element || !refProjects.current) return;
        sectionsHook.setSectionElement('2', refProjects);
    }, [refProjects])

    return (
        <div id='content'>
            <section ref={refAbout}>
                
            </section>
            <section ref={refEducation}>

            </section>
            <section ref={refProjects}>

            </section>
        </div>
    )
}