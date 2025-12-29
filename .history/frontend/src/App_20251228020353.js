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
                <h1 className="hero-title">
                  Welcome to <span>The Localise</span>
                </h1>
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
