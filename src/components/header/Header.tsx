import './Header.scss';
import { SectionBubbles } from '../sectionBubbles/SectionBubbles';
import { SectionsHookData } from '../../hooks/UseSections';

export interface HeaderProps {
    sectionsHook: SectionsHookData,
}

export function Header(props: HeaderProps) {
    const { sectionsHook } = props;

    return (
        <header>
            <SectionBubbles sectionsHook={sectionsHook} />
        </header>
    )
}