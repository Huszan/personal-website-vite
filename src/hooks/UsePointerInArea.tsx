import { useEffect, useState } from "react";
import { useGlobalContext } from "./UseGlobalContext";

interface PointerInAreaProps {
  xLim: {
    min: number;
    max: number;
  };
  yLim: {
    min: number;
    max: number;
  };
}

interface PointerInAreaData {
  isInArea: boolean;
}

const usePointerInArea = (props: PointerInAreaProps) => {
  const { pointerPosition } = useGlobalContext();
  const { xLim, yLim } = props;
  const [isInArea, setIsInArea] = useState(false);

  useEffect(() => {
    const isPointerAvailable = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerAvailable) {
      setIsInArea(false);
      return;
    }
    const { x, y } = pointerPosition;
    const current =
      xLim.min <= x && x <= xLim.max && yLim.min <= y && y <= yLim.max;
    setIsInArea(current);
  }, [pointerPosition, xLim.max, xLim.min, yLim.max, yLim.min]);

  return { isInArea } as PointerInAreaData;
};

export { usePointerInArea };
