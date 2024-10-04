import { useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return { x: position.x, y: position.y } as PointerPositionData;
};

export { usePointerPosition };
