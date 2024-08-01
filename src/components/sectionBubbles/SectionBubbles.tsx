import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SectionBubbles.scss';
import { SectionsHookData } from '../../hooks/UseSections';
import { scrollToElement } from '../../utils/BaseUtils';
import { CSSProperties } from 'react';

export interface SectionBubblesProps {
    sectionsHook: SectionsHookData,
}

export function SectionBubbles(props: SectionBubblesProps) {
    const { sectionsHook } = props;

    if (!sectionsHook.get) return;

    const nodeElements = Object.entries(sectionsHook.get).map(([key, section]) => {
        const isActive = sectionsHook.activeSectionI === key;
        
        const selectElement = () => {
            sectionsHook.setActiveSectionI(key);
            if (section.element) scrollToElement(section.element);
        }

        return (
            <li key={key} className={isActive ? 'selected' : ''} onClick={selectElement}>
                <div className='section-selector'>
                    <FontAwesomeIcon className='ico' icon={section.icon} />
                </div>
            </li>
        )
    })

    const progressPointerStyle = {
        '--progress': `${Number(sectionsHook.getViewProgress().toFixed(3))*100}%`,
    }

    return (
        <ul className='section-bubbles' style={progressPointerStyle}>
            <div className='progress-pointer-box'>
                <div className='progress-pointer'></div>
            </div>
            { nodeElements }
        </ul>
    )
}