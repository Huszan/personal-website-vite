import { useMediaQuery } from "@uidotdev/usehooks";
import "./App.scss";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { SideNav } from "./components/sideNav/SideNav";
import { useSections } from "./hooks/UseSections";
import { sectionsData } from "./data/SectionsData";
import { ScrollMoveBackground } from "./components/scrollMoveBackground/ScrollMoveBackground";
import ZoomInOverlay from "./components/zoomInOverlay/ZoomInOverlay";
import { useGlobalContext } from "./hooks/UseGlobalContext";

function App() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const sectionsHook = useSections(sectionsData);
  const { config } = useGlobalContext();

  return (
    <div
      id="app"
      className={`${isMobile ? "sd" : "md"}${
        config.isSideBarLocked ? " lock-side" : ""
      }`}
    >
      <ScrollMoveBackground bgSrc="/src/assets/images/bg_code.png" />
      <ZoomInOverlay />
      <SideNav sectionsHook={sectionsHook} />
      <Content sectionsHook={sectionsHook} />
      <Footer sectionsHook={sectionsHook} />
    </div>
  );
}

export default App;
