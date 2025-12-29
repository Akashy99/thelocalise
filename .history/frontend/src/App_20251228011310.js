import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";

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

              <ImageSlider />
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
