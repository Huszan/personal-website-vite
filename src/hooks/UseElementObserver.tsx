import { useEffect } from "react";

export interface ElementObserverOptions {
  selection: string;
  intersectionOptions: IntersectionObserverInit;
}

const useElementObserver = (
  callback: (target: Element, isIntersecting: boolean) => void,
  options: ElementObserverOptions
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(options.selection);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.target, entry.isIntersecting);
      });
    }, options.intersectionOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [callback, options]);
};

export default useElementObserver;
