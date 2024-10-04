import { useState, useEffect } from "react";

type SwipeDirection = "left" | "right" | "up" | "down" | null;

interface SwipeProps {
  ref: React.RefObject<HTMLElement>;
  threshold?: number;
}

const useSwipe = (props: SwipeProps) => {
  const { ref, threshold = 50 } = props;
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirection>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      setTouchStart({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      setTouchEnd({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;

      const deltaX = touchEnd.x - touchStart.x;
      const deltaY = touchEnd.y - touchStart.y;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > threshold) {
          setSwipeDirection(deltaX > 0 ? "right" : "left");
        }
      } else {
        if (Math.abs(deltaY) > threshold) {
          setSwipeDirection(deltaY > 0 ? "down" : "up");
        }
      }

      window.setTimeout(() => {
        setSwipeDirection(null);
      }, 100);
      setTouchStart(null);
      setTouchEnd(null);
    };

    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [ref, touchStart, touchEnd, threshold]);

  return swipeDirection;
};

export default useSwipe;
