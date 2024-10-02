import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import { calcElementsPerPage } from "../../utils/CarouselUtils";

interface CarouselProps extends React.HTMLAttributes<HTMLElement> {
  targetWidth?: number; // In px
  buttonWidth?: number; // In rem
}

const Carousel = (props: CarouselProps) => {
  const { targetWidth = 300, buttonWidth = 3, children } = props;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const elementsWrapperRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [elementsPerPage, setElementsPerPage] = useState(
    calcElementsPerPage(targetWidth, buttonWidth)
  );

  const movePercent = 100 / elementsPerPage;
  const carouselWrapperStyle: React.CSSProperties = {
    transform: `translateX(${(currentPage * -movePercent).toFixed(2)}%)`,
    gridAutoColumns: `${movePercent.toFixed(2)}%`,
  };

  useEffect(() => {
    const action = () =>
      setElementsPerPage(calcElementsPerPage(targetWidth, buttonWidth));
    addEventListener("resize", action);
    return () => removeEventListener("resize", action);
  }, [targetWidth, buttonWidth]);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.style.setProperty(
      "--nav-button-size",
      `${buttonWidth}rem`
    );
  }, [carouselRef, buttonWidth]);

  const clamp = (val: number) => {
    if (!elementsWrapperRef.current) return 0;
    const [min, max] = [
      0,
      elementsWrapperRef.current.children.length - elementsPerPage,
    ];
    return Math.max(min, Math.min(max, val));
  };

  const isLast = () => {
    if (!elementsWrapperRef.current) return;
    return (
      currentPage + elementsPerPage ===
      elementsWrapperRef.current.children.length
    );
  };

  const isFirst = () => {
    return currentPage === 0;
  };

  const goNext = () => {
    setCurrentPage((prev) => clamp(prev + elementsPerPage));
  };

  const goPrev = () => {
    setCurrentPage((prev) => clamp(prev - elementsPerPage));
  };

  return (
    <div className="carousel" ref={carouselRef}>
      {!isFirst() && (
        <div className="button-prev-wrapper">
          <button className="button-prev" onClick={goPrev}>
            {"<"}
          </button>
        </div>
      )}
      <div
        className="carousel-wrapper"
        style={carouselWrapperStyle}
        ref={elementsWrapperRef}
      >
        {children}
      </div>
      {!isLast() && (
        <div className="button-next-wrapper">
          <button className="button-next" onClick={goNext}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
