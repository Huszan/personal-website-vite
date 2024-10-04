import useStorage from "./UseStorage";

export interface ConfigData {
  centerOnSection: boolean;
  setCenterOnSection: React.Dispatch<React.SetStateAction<boolean>>;
  isSideBarLocked: boolean;
  setIsSideBarLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const useConfig = () => {
  const { get: centerOnSection, set: setCenterOnSection } = useStorage<boolean>(
    { key: "conf_cos", val: false }
  );
  const { get: isSideBarLocked, set: setIsSideBarLocked } = useStorage<boolean>(
    { key: "conf_isbl", val: true }
  );

  return {
    centerOnSection,
    setCenterOnSection,
    isSideBarLocked,
    setIsSideBarLocked,
  } as ConfigData;
};

export default useConfig;
