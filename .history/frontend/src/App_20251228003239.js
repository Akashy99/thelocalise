import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

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

      {/* Dummy content to enable scrolling */}
      <div style={{ height: "150vh" }}></div>
    </>
  );
}

export default App;
