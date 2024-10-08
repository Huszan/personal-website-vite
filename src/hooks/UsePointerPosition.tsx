import { useCallback, useEffect, useMemo, useState } from "react";
import { throttle } from "../utils/BaseUtils";

export interface PointerPositionData {
  x: number;
  y: number;
}

const usePointerPosition = () => {
  const [position, setPosition] = useState<PointerPositionData>({
    x: 0,
    y: 0,
  });

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);
  const throttledOnMouseMove = useMemo(
    () => throttle(onMouseMove, 1000 / 30),
    [onMouseMove]
  );

  useEffect(() => {
    window.addEventListener("mousemove", throttledOnMouseMove);
    return () => window.removeEventListener("mousemove", throttledOnMouseMove);
  }, [throttledOnMouseMove]);

  return position;
};

export { usePointerPosition };
