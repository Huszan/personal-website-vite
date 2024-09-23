import { createContext } from "react";
import useConfig, { ConfigData } from "../hooks/UseConfig";
import { ScrollData, useScrollData } from "../hooks/UseScrollData";

export interface GlobalContextData {
  config: ConfigData;
  lastScroll: ScrollData;
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

  const contextValue: GlobalContextData = {
    config,
    lastScroll,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
