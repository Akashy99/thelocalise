import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";


import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <div className="hero">
  <div className="hero-content">
    {/* LEFT SIDE - TEXT */}
    <div className="hero-text">
      <h1 className="hero-title">
        <span>Empowering Local Businesses</span>
        <span>Through Smart Digital Solutions</span>
      </h1>
    </div>

    {/* RIGHT SIDE - IMAGE */}
    <div className="hero-image">
      <img src="/hero-image.png" alt="Localise Services" />
    </div>
  </div>
</div>

              <OurServices />

              <ImageSlider />

              

              <Footer />
            </>
          }
        />

        {/* BLOGS PAGE */}
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
