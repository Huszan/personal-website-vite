import { useState } from "react";

export interface ZoomInData {
  current: string | null;
  setCurrent: React.Dispatch<React.SetStateAction<string | null>>;
  isZoomedIn: boolean;
}

const useZoomIn = (): ZoomInData => {
  const [current, setCurrent] = useState<string | null>(null);

  return {
    current,
    setCurrent,
    isZoomedIn: current !== null,
  } as ZoomInData;
};

export { useZoomIn };
