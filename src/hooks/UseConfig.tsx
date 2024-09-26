import useStorage from "./UseStorage";

export interface ConfigData {
  centerOnSection: boolean;
  setCenterOnSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const useConfig = () => {
  const centerOnSection = useStorage<boolean>({ key: "conf_cos", val: false });

  return {
    centerOnSection: centerOnSection.get,
    setCenterOnSection: centerOnSection.set,
  } as ConfigData;
};

export default useConfig;
