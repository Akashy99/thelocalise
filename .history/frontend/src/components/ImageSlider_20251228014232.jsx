import React, { useEffect, useState } from "react";
import "../styles/ImageSlider.css";

const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {/* SLIDES */}
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide-box" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button className="slider-arrow left" onClick={prevSlide}>
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button className="slider-arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* DOT INDICATORS */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
