import { SectionRecords } from "../hooks/UseSections";
import { getElementVisiblePercentage } from "./BaseUtils";

export function getMostVisibleSection (
    sections: SectionRecords,
): string | null {
    let bestVisibility: number = 0;
    let currentElementI: string | null = null;

    for (const [key, val] of Object.entries(sections)) {
        if (!val.element) continue;
        const currentVisibility = getElementVisiblePercentage(val.element);
        if (bestVisibility < currentVisibility) {
            currentElementI = key;
            bestVisibility = currentVisibility;
        }
    }

    return currentElementI;
}