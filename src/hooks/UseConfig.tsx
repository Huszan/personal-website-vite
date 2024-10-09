import useStorage from "./UseStorage";

export interface ConfigData {
  isAutoOpenSidebarOnScroll: boolean;
  setIsAutoOpenSidebarOnScroll: React.Dispatch<React.SetStateAction<boolean>>;
  centerOnSection: boolean;
  setCenterOnSection: React.Dispatch<React.SetStateAction<boolean>>;
  isSideBarLocked: boolean;
  setIsSideBarLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const useConfig = () => {
  const { get: isAutoOpenSidebarOnScroll, set: setIsAutoOpenSidebarOnScroll } =
    useStorage<boolean>({ key: "conf_aosb", val: true });
  const { get: centerOnSection, set: setCenterOnSection } = useStorage<boolean>(
    { key: "conf_cos", val: true }
  );
  const { get: isSideBarLocked, set: setIsSideBarLocked } = useStorage<boolean>(
    { key: "conf_isbl", val: true }
  );

  return {
    isAutoOpenSidebarOnScroll,
    setIsAutoOpenSidebarOnScroll,
    centerOnSection,
    setCenterOnSection,
    isSideBarLocked,
    setIsSideBarLocked,
  } as ConfigData;
};

export default useConfig;
