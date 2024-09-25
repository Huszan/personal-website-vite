export function scrollToElement(element: HTMLElement | undefined) {
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
}

export function getElementVisiblePercentage(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Calculate the dimensions of the element that are visible
  const visibleWidth = Math.max(
    0,
    Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)
  );
  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
  );

  // Calculate the total area of the element and the visible area
  const elementArea = rect.width * rect.height;
  const visibleArea = visibleWidth * visibleHeight;

  // Calculate the percentage of the element that is visible
  const visiblePercentage = (visibleArea / elementArea) * 100;

  return visiblePercentage;
}

export function downloadFile(id: string) {
  const el = document.getElementById(id);
  if (el) el.click();
}

export function getChildrenHeight(element: HTMLElement) {
  const totalHeight = Array.from(element.children).reduce((total, child) => {
    return total + (child as HTMLElement).offsetHeight;
  }, 0);
  return totalHeight;
}

export function convertRemToPx(x: number) {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return x * fontSize;
}

export function isElementOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}
