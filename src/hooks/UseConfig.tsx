import { useState } from "react";

export interface ConfigData {
  centerOnSection: boolean;
  setCenterOnSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const useConfig: () => ConfigData = () => {
  const [centerOnSection, setCenterOnSection] = useState(true);

  return {
    centerOnSection,
    setCenterOnSection,
  } as ConfigData;
};

export default useConfig;
