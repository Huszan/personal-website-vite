import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SectionBubbles.scss';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export interface SectionBubblesProps {
    nodes: SectionBubbleNode[],
    indexSelected?: number | undefined,
}

export interface SectionBubbleNode {
    name: string,
    ico: IconDefinition,
    cb: () => void,
}

export function SectionBubbles(props: SectionBubblesProps) {
    const [selected, setSelected] = useState<number | undefined>(props.indexSelected);

    if (!props.nodes) return;

    const nodeElements = props.nodes.map((node, i) => {
        const isSelected = selected === i;
        const callback = () => {
            setSelected(i);
            node.cb();
        }

        return (
            <li key={i} className={isSelected ? 'selected' : ''} onClick={callback}>
                <div className='section-selector'>
                    <FontAwesomeIcon className='ico' icon={node.ico} />
                </div>
            </li>
        )
    })

    return (
        <ul>
            { nodeElements }
        </ul>
    )
}