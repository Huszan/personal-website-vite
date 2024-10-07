import "./ScrollMoveBackground.scss";
import { useGlobalContext } from "../../hooks/UseGlobalContext";
import { useEffect } from "react";

interface ScrollMoveBackgroundProps {
  bgSrc: string;
}

export const ScrollMoveBackground = (props: ScrollMoveBackgroundProps) => {
  const { bgSrc } = props;
  const { lastScroll } = useGlobalContext();

  const size = document.body.offsetHeight;
  const pxFromTop = lastScroll.position.y + window.innerHeight;

  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${bgSrc})`,
    height: size,
    transform: `translateY(${-(size - pxFromTop)}px)`,
  };

  return (
    <div className="sm-bg-wrapper">
      <div className="sm-bg">
        <div className="sm-bg--content" style={bgStyle} />
      </div>
    </div>
  );
};
