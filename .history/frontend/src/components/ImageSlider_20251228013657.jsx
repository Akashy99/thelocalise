import React, { useEffect, useState } from "react";
import "../styles/ImageSlider.css";

const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
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
    </div>
  );
};

export default ImageSlider;
