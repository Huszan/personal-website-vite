import { MutableRefObject, useEffect, useRef } from 'react';
import './Footer.scss';
import { SectionsHookData } from '../../hooks/UseSections';

export interface FooterProps {
    sectionsHook: SectionsHookData
}

export function Footer(props: FooterProps) {
    const refFooter: MutableRefObject<HTMLElement | null> = useRef(null);

    const { sectionsHook } = props;

    useEffect(() => {
        if (sectionsHook.get['3'].element || !refFooter.current) return;
        sectionsHook.setSectionElement('3', refFooter);
    }, [refFooter])
    
    return (
        <footer ref={refFooter}>

        </footer>
    )
}