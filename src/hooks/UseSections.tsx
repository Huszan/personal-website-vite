import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useState } from "react"
import { scrollToElement } from "../utils/BaseUtils";
import { useLastScrollPosition } from "./UseLastScrollPosition";
import { getMostVisibleSection } from "../utils/SectionUtils";

export interface Section {
    name: string,
    icon: IconDefinition,
    index: number,
    element?: HTMLElement | undefined,
    useBubble: boolean,
}

export interface SectionRecords {
    [id: string]: Section
}

export interface SectionsHookData {
    get: SectionRecords,
    setSections: Dispatch<SetStateAction<SectionRecords>>,
    setSection: (section: Section) => void,
    setSectionElement: (id: string, ref: MutableRefObject<HTMLElement | null>) => void,
    activeSectionI: string | null,
    setActiveSectionI: Dispatch<SetStateAction<string | null>>,
    getViewProgress: () => number,
}

export function useSections(
    initialSections: SectionRecords = {}
) {
    const [sections, setSections] = useState<SectionRecords>(initialSections);
    const [activeSectionI, setActiveSectionI] = useState<string | null>(null);
    const lastScrollPosition = useLastScrollPosition();

    function set(section: Section) {
        setSections((prev) => {
            return {
                ...prev,
                section
            }
        })
    }

    function setSectionElement(
        id: string, 
        ref: MutableRefObject<HTMLElement | null>,
    ) {
        if (!ref || !ref.current || !sections[id]) return;
        setSections((prev) => {
            const nextEl = {
                ...prev[id],
                element: ref.current,
            } as Section;

            return {
                ...prev,
                [id]: nextEl
            }
        })
    }

    function getSectionElements() {
        return Object.values(sections).map(el => el.element).filter(el => el);
    }

    function getViewProgress() {
        const elements = getSectionElements();
        if (!elements || elements.length === 0) return 0;
        let pixelsDown = -elements[0]!.getBoundingClientRect().top;
        elements.shift();
        let progress = 0;
        for (const el of elements) {
            if (!el) return 0;
            const maxProgress = 1 / elements.length;
            if (pixelsDown - el.offsetHeight >= 0) progress += maxProgress;
            else {
                progress += (pixelsDown / el.offsetHeight) * maxProgress;
                break;
            }
            pixelsDown -= el.offsetHeight;
        }
        const progressClamp = Math.min(100, Math.max(progress, 0));
        return progressClamp;
    }

    const areSectionsInitialized = useCallback(() => {
        return Object.values(sections).filter(el => el.element).length > 0;
    }, [sections])

    useEffect(() => {
        if (!areSectionsInitialized()) return;

        const mostVisibleI = getMostVisibleSection(sections);
        setActiveSectionI(mostVisibleI);

        const timeout = setTimeout(() => {
            if (activeSectionI === null || !sections[activeSectionI].element) return;
            scrollToElement(sections[activeSectionI].element);
        }, 500)

        return () => {
            clearTimeout(timeout);
        }
    }, [lastScrollPosition.scrollPosition, activeSectionI, sections, areSectionsInitialized])

    const sectionsData: SectionsHookData = {
        get: sections,
        setSections,
        setSection: set,
        setSectionElement,
        activeSectionI,
        setActiveSectionI,
        getViewProgress,
    }

    return sectionsData;
}