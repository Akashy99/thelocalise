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
                  <span>The Localise</span>
                  <span>Welcomes You</span>
                </h1>
                <h2>At The Localise, we are a Business Consultancy Agency dedicated to helping businesses start and grow. Our range of services includes Business Start-up registration, Business Licensing, Permissions, Digital Marketing, and tools that empower MSMEs to succeed.</h2>
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
