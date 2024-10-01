import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button/Button";
import "./ZoomInOverlay.scss";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../hooks/UseGlobalContext";

const ZoomInOverlay = () => {
  const { zoomIn } = useGlobalContext();

  const zoomOut = () => {
    zoomIn.setCurrent(null);
  };

  const contentImgStyle: React.CSSProperties = {
    backgroundImage: zoomIn.current ? `url(${zoomIn.current})` : "none",
  };

  return (
    <div className="zi-overlay">
      {zoomIn.isZoomedIn && (
        <div className="content-wrapper" onClick={zoomOut}>
          <div className="image-container" style={contentImgStyle} />
          {/* <img className="zoomed-img" src={zoomIn.current!} /> */}
          <Button className={"close-button"} onClick={zoomOut} variant="clear">
            <FontAwesomeIcon icon={faX} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ZoomInOverlay;
