import { createContext } from "react";
import useConfig, { ConfigData } from "../hooks/UseConfig";
import { ScrollData, useScrollData } from "../hooks/UseScrollData";
import { useZoomIn, ZoomInData } from "../hooks/UseZoomIn";
import {
  PointerPositionData,
  usePointerPosition,
} from "../hooks/UsePointerPosition";
import { useWindowSize } from "@uidotdev/usehooks";

export interface GlobalContextData {
  config: ConfigData;
  lastScroll: ScrollData;
  zoomIn: ZoomInData;
  pointerPosition: PointerPositionData;
  windowSize: {
    width: number | null;
    height: number | null;
  };
}

export const GlobalContext = createContext<GlobalContextData | undefined>(
  undefined
);

interface GlobalContextComponentProps {
  children: React.ReactNode;
}

export default function GlobalContextComponent(
  props: GlobalContextComponentProps
) {
  const { children } = props;
  const config = useConfig();
  const lastScroll = useScrollData();
  const zoomIn = useZoomIn();
  const pointerPosition = usePointerPosition();
  const windowSize = useWindowSize();

  const contextValue: GlobalContextData = {
    config,
    lastScroll,
    zoomIn,
    pointerPosition,
    windowSize,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
