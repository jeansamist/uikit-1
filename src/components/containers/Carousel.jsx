import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

export default function Carousel({ children, slidesVisibles = 1, slidesToScrool = 1, className = "", style = {} }) {
  const [index, setindex] = useState(0);
  const [slidesContainerWidth, setslidesContainerWidth] = useState(100);
  const [slideWidth, setslideWidth] = useState(100);
  const [pages, setpages] = useState(1);

  const [slidesContainerPixelsWidth, setslidesContainerPixelsWidth] = useState(0);
  const [slidePixelsWidth, setslidePixelsWidth] = useState(0);

  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    let widthRatio = 100 / slidesVisibles;
    let nbrSlides = React.Children.count(children);
    setslidesContainerWidth(widthRatio * nbrSlides);
    setslideWidth(100 / nbrSlides);

    setpages(nbrSlides - slidesVisibles + 1);
  }, [children, slidesVisibles, slidesToScrool]);

  useEffect(() => {
    setslidesContainerPixelsWidth(containerRef.current.clientWidth);
    setslidePixelsWidth(slideRef.current.clientWidth);
  }, [slidesContainerWidth, containerRef, slideRef]);

  function next() {
    if (index + 1 < pages) {
      let nextIndex = index + slidesToScrool;
      if (nextIndex + 1 > pages) {
        nextIndex = nextIndex - (nextIndex - pages) - 1;
      }

      setindex(nextIndex);
    }
  }

  function prev() {
    if (index !== 0) {
      let nextIndex = index - slidesToScrool;
      if (nextIndex < 0) {
        nextIndex = 0;
      }
      setindex(nextIndex);
    }
  }

  return (
    <div style={{ ...style }} className={`slider${className ? ` ${className}` : ""}`}>
      <div
        ref={containerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -(slidesContainerPixelsWidth - slidePixelsWidth) }}
        className="flex slides-container"
        style={{ width: slidesContainerWidth + "%", transform: `translateX(-${slideWidth * index}%)` }}
      >
        {React.Children.map(children, (child, i) => (
          <div ref={slideRef} key={i} className="slide" style={{ width: slideWidth + "%" }}>
            <child.type {...child.props} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prev} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={next} className="next">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.node,
  slidesVisibles: PropTypes.number,
  slidesToScrool: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};
