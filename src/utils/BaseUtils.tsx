export function scrollToElement(element: HTMLElement | undefined) {
  if (element === undefined) return;
  const elementRect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const bounds = Math.min(viewportHeight - elementRect.height, 0);

  if (bounds > elementRect.top) {
    scrollToElementBot(element);
  } else if (elementRect.top > 0) {
    scrollToElementTop(element);
  }
}

export function scrollToElementTop(element: HTMLElement | undefined) {
  if (element === undefined) return;
  const elementRect = element.getBoundingClientRect();
  window.scrollTo({
    top: window.scrollY + elementRect.top,
    behavior: "smooth",
  });
}

export function scrollToElementBot(element: HTMLElement | undefined) {
  if (element === undefined) return;
  const elementRect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const bounds = Math.min(viewportHeight - elementRect.height, 0);
  window.scrollTo({
    top: window.scrollY - bounds + elementRect.top,
    behavior: "smooth",
  });
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

export function convertRemToPxNum(x: number) {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return x * fontSize;
}

export function convertRemToPx(x: string) {
  const val = convertRemToPxNum(Number(x.replace("rem", "")));
  return `${val}px`;
}

export function isElementOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let lastCall = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>): void {
    const now = new Date().getTime();

    // If enough time has passed, invoke the function
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      // Clear any previous scheduled call and schedule a new one
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastCall = new Date().getTime();
        func(...args);
      }, delay - (now - lastCall)); // Schedule to execute after the remaining time
    }
  } as T;
}
