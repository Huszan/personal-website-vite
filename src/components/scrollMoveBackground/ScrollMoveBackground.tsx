import { useLastScrollPosition } from "../../hooks/UseLastScrollPosition";
import "./ScrollMoveBackground.scss";

interface ScrollMoveBackgroundProps {
  bgSrc: string;
}

export const ScrollMoveBackground = (props: ScrollMoveBackgroundProps) => {
  const { bgSrc } = props;
  const { scrollPosition } = useLastScrollPosition();
  const percentFromTop = (
    (scrollPosition.y / (document.body.offsetHeight - window.innerHeight)) *
    100
  ).toFixed(1);

  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${bgSrc})`,
    backgroundPosition: `center ${percentFromTop}%`,
  };

  return (
    <div className="sm-bg-wrapper">
      <div className="sm-bg" style={bgStyle} />
    </div>
  );
};
