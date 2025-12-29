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
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slide ${index === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
