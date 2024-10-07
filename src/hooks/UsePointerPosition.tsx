import { useCallback, useEffect, useState } from "react";
import { throttle } from "../utils/BaseUtils";

export interface PointerPositionData {
  x: number;
  y: number;
}

const usePointerPosition = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);
  const throttledOnMouseMove = throttle(onMouseMove, 100);

  useEffect(() => {
    window.addEventListener("mousemove", throttledOnMouseMove);
    return () => window.removeEventListener("mousemove", throttledOnMouseMove);
  }, [throttledOnMouseMove]);

  return { x: position.x, y: position.y } as PointerPositionData;
};

export { usePointerPosition };
