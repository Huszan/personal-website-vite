import "./ScrollMoveBackground.scss";
import { useGlobalContext } from "../../hooks/UseGlobalContext";
import { useEffect } from "react";

interface ScrollMoveBackgroundProps {
  bgSrc: string;
}

export const ScrollMoveBackground = (props: ScrollMoveBackgroundProps) => {
  const { bgSrc } = props;
  const { lastScroll } = useGlobalContext();

  const percentFromTop = (
    -(
      lastScroll.position.y /
      (document.body.offsetHeight - window.innerHeight)
    ) * 100
  ).toFixed(1);

  const size = document.body.offsetHeight;

  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${bgSrc})`,
    backgroundPosition: `center ${percentFromTop}%`,
    backgroundSize: size,
  };

  return (
    <div className="sm-bg-wrapper">
      <div className="sm-bg" style={bgStyle} />
    </div>
  );
};
