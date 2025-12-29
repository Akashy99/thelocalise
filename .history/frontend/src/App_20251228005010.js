import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero">
      <h1 className="hero-title">
  Welcome to <span>The Localise</span>
</h1>
      </div>

      {/* IMAGE SLIDER */}
      <ImageSlider />

      {/* Dummy content to enable scrolling */}
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
