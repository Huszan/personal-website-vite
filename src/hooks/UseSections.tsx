import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { scrollToElement } from "../utils/BaseUtils";
import { getMostVisibleSection } from "../utils/SectionUtils";
import { useGlobalContext } from "./UseGlobalContext";

export interface Section {
  name: string;
  icon: IconDefinition;
  element?: HTMLElement | undefined;
  useBubble: boolean;
}

export interface SectionRecords {
  [key: string]: Section;
}

export interface SectionsHookData {
  get: SectionRecords;
  setSections: Dispatch<SetStateAction<SectionRecords>>;
  setSection: (section: Section) => void;
  setSectionElement: (key: string, element: HTMLElement) => void;
  activeSectionKey: string | null;
  setActiveSectionKey: Dispatch<SetStateAction<string | null>>;
  viewProgress: number;
}

export function useSections(initialSections: SectionRecords = {}) {
  const { config, lastScroll } = useGlobalContext();
  const [sections, setSections] = useState<SectionRecords>(initialSections);
  const [activeSectionKey, setActiveSectionKey] = useState<string | null>(null);

  function set(section: Section) {
    setSections((prev) => {
      return {
        ...prev,
        section,
      };
    });
  }

  const setSectionElement = (key: string, element: HTMLElement) => {
    if (!element || !sections[key] || sections[key].element) return;
    setSections((prev) => {
      const nextEl = {
        ...prev[key],
        element: element,
      } as Section;

      return {
        ...prev,
        [key]: nextEl,
      };
    });
  };

  const sectionElements = useMemo(() => {
    return Object.values(sections)
      .map((el) => el.element)
      .filter((el) => el !== undefined);
  }, [sections]);

  const viewProgress = useMemo(() => {
    if (sectionElements.length === 0) return 0;

    const maxProgress = 1 / (sectionElements.length - 1);
    let progress = 0;
    for (let i = 1; i < sectionElements.length; i++) {
      const el = sectionElements[i];
      const rect = el.getBoundingClientRect();
      const offset = Math.min(window.innerHeight, el.offsetHeight);
      const distance = (rect.top - window.innerHeight) / offset;

      if (distance <= -1) progress += maxProgress;
      else if (distance < 0) {
        progress += Math.abs(distance) * maxProgress;
        break;
      }
    }

    const progressClamp = Math.min(100, Math.max(progress, 0));
    return progressClamp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionElements, lastScroll.position]);

  const areSectionsInitialized = useMemo(() => {
    return Object.values(sections).filter((el) => el.element).length > 0;
  }, [sections]);

  useEffect(() => {
    if (!areSectionsInitialized) return;

    const mostVisibleKey = getMostVisibleSection(sections);
    setActiveSectionKey(mostVisibleKey);
  }, [lastScroll.position, sections, areSectionsInitialized]);

  useEffect(() => {
    if (!config.centerOnSection) return;
    if (activeSectionKey === null || !sections[activeSectionKey].element)
      return;

    const timeout = setTimeout(() => {
      scrollToElement(sections[activeSectionKey].element);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSectionKey, config, sections]);

  const sectionsData: SectionsHookData = {
    get: sections,
    setSections,
    setSection: set,
    setSectionElement,
    activeSectionKey,
    setActiveSectionKey,
    viewProgress,
  };

  return sectionsData;
}
