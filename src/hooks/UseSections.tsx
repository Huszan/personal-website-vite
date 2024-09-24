import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { scrollToElement } from "../utils/BaseUtils";
import { getMostVisibleSection } from "../utils/SectionUtils";
import { useGlobalContext } from "./UseGlobalContext";

export interface Section {
  name: string;
  icon: IconDefinition;
  index: number;
  element?: HTMLElement | undefined;
  useBubble: boolean;
}

export interface SectionRecords {
  [id: string]: Section;
}

export interface SectionsHookData {
  get: SectionRecords;
  setSections: Dispatch<SetStateAction<SectionRecords>>;
  setSection: (section: Section) => void;
  setSectionElement: (
    id: string,
    ref: MutableRefObject<HTMLElement | null>
  ) => void;
  activeSectionI: string | null;
  setActiveSectionI: Dispatch<SetStateAction<string | null>>;
  getViewProgress: () => number;
}

export function useSections(initialSections: SectionRecords = {}) {
  const { config, lastScroll } = useGlobalContext();
  const [sections, setSections] = useState<SectionRecords>(initialSections);
  const [activeSectionI, setActiveSectionI] = useState<string | null>(null);

  function set(section: Section) {
    setSections((prev) => {
      return {
        ...prev,
        section,
      };
    });
  }

  function setSectionElement(
    id: string,
    ref: MutableRefObject<HTMLElement | null>
  ) {
    if (!ref || !ref.current || !sections[id]) return;
    setSections((prev) => {
      const nextEl = {
        ...prev[id],
        element: ref.current,
      } as Section;

      return {
        ...prev,
        [id]: nextEl,
      };
    });
  }

  function getSectionElements() {
    return Object.values(sections)
      .map((el) => el.element)
      .filter((el) => el !== undefined);
  }

  function getViewProgress() {
    const elements = getSectionElements();
    if (elements.length === 0) return 0;

    elements.shift();
    const maxProgress = 1 / elements.length;
    let progress = 0;
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      const offset = Math.min(window.innerHeight, el.offsetHeight);
      const thingy = (rect.top - window.innerHeight) / offset;

      if (thingy <= -1) progress += maxProgress;
      else if (thingy < 0) {
        progress += Math.abs(thingy) * maxProgress;
        break;
      }
    }

    const progressClamp = Math.min(100, Math.max(progress, 0));
    return progressClamp;
  }

  const areSectionsInitialized = useCallback(() => {
    return Object.values(sections).filter((el) => el.element).length > 0;
  }, [sections]);

  useEffect(() => {
    if (!areSectionsInitialized()) return;

    const mostVisibleI = getMostVisibleSection(sections);
    setActiveSectionI(mostVisibleI);
  }, [lastScroll.position, sections, areSectionsInitialized]);

  useEffect(() => {
    if (!config.centerOnSection) return;
    if (activeSectionI === null || !sections[activeSectionI].element) return;

    const timeout = setTimeout(() => {
      scrollToElement(sections[activeSectionI].element);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSectionI]);

  const sectionsData: SectionsHookData = {
    get: sections,
    setSections,
    setSection: set,
    setSectionElement,
    activeSectionI,
    setActiveSectionI,
    getViewProgress,
  };

  return sectionsData;
}
