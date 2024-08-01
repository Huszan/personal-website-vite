import { useState, useEffect, useRef } from 'react';

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface ScrollDirection {
  vertical: 'up' | 'down' | null;
  horizontal: 'left' | 'right' | null;
}

export function useLastScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>({
    vertical: null,
    horizontal: null,
  });

  const lastScrollTop = useRef(0);
  const lastScrollLeft = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentScrollLeft = window.scrollX || document.documentElement.scrollLeft;

      const verticalDirection =
        currentScrollTop > lastScrollTop.current
          ? 'down'
          : currentScrollTop < lastScrollTop.current
          ? 'up'
          : null;

      const horizontalDirection =
        currentScrollLeft > lastScrollLeft.current
          ? 'right'
          : currentScrollLeft < lastScrollLeft.current
          ? 'left'
          : null;

      setScrollPosition({ x: currentScrollLeft, y: currentScrollTop });
      setScrollDirection({ vertical: verticalDirection, horizontal: horizontalDirection });

      lastScrollTop.current = currentScrollTop;
      lastScrollLeft.current = currentScrollLeft;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollPosition, scrollDirection };
}