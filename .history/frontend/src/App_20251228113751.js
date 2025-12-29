import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

// Startup pages
import StartupIndia from "./pages/startup/StartupIndia";
import OPC from "./pages/startup/OPC";
import Partnership from "./pages/startup/Partnership";
import LLP from "./pages/startup/LLP";
import PrivateLimited from "./pages/startup/PrivateLimited";

// License pages
import GST from "./pages/license/GST";
import MSME from "./pages/license/MSME";
import Gumasta from "./pages/license/Gumasta";
import IEC from "./pages/license/IEC";

// IGR pages
import ReraAgent from "./pages/igr/ReraAgent";
import ReraProject from "./pages/igr/ReraProject";
import LeaveLicense from "./pages/igr/LeaveLicense";

// Tender pages
import TenderFilling from "./pages/tender/TenderFilling";
import DSC from "./pages/tender/DSC";
import GEM from "./pages/tender/GEM";

function App() {
  return (
    <Router>
      {/* Always visible */}
      <Navbar />

      {/* ROUTES START HERE */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />

        {/* STARTUP */}
        <Route path="/startup-india" element={<StartupIndia />} />
        <Route path="/opc" element={<OPC />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/llp" element={<LLP />} />
        <Route path="/private-limited" element={<PrivateLimited />} />

        {/* LICENSE */}
        <Route path="/gst" element={<GST />} />
        <Route path="/msme" element={<MSME />} />
        <Route path="/gumasta" element={<Gumasta />} />
        <Route path="/iec" element={<IEC />} />

        {/* IGR */}
        <Route path="/rera-agent" element={<ReraAgent />} />
        <Route path="/rera-project" element={<ReraProject />} />
        <Route path="/leave-license" element={<LeaveLicense />} />

        {/* TENDER */}
        <Route path="/tender-filling" element={<TenderFilling />} />
        <Route path="/dsc" element={<DSC />} />
        <Route path="/gem" element={<GEM />} />
      </Routes>

      {/* Always visible */}
      <Footer />
    </Router>
  );
}

export default App;
