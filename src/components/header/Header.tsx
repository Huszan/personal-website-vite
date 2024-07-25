import './Header.scss';
import { SectionBubbleNode, SectionBubbles } from '../sectionBubbles/SectionBubbles';
import { faProjectDiagram, faUniversity, faUser } from '@fortawesome/free-solid-svg-icons';

export function Header() {

    const nodes: SectionBubbleNode[] = [
        {
            name: 'About me',
            ico: faUser,
            cb: () => {},
        },
        {
            name: 'Education',
            ico: faUniversity,
            cb: () => {},
        },
        {
            name: 'Projects',
            ico: faProjectDiagram,
            cb: () => {},
        },
    ]
    
    return (
        <header>
            <SectionBubbles nodes={nodes} indexSelected={0} />
        </header>
    )
}