import { useContext } from "react";
import {
  GlobalContext,
  GlobalContextData,
} from "../context/GlobalContextComponent";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextComponent"
    );
  }

  return context as GlobalContextData;
};
