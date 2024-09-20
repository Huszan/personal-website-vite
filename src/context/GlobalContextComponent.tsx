import { createContext } from "react";
import useConfig, { ConfigData } from "../hooks/UseConfig";

interface GlobalContextData {
  config: ConfigData;
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

  const contextValue: GlobalContextData = {
    config,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
