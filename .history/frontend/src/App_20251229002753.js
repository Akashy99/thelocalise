import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import OurServices from "./components/OurServices";

/* STARTUP PAGE */ 

import Blogs from "./pages/Blogs";
import StartupIndia from "./pages/startup/StartupIndia";
import OPC from "./pages/startup/OPC"
import Partnership from "./pages/startup/Partnership";
import LLP from "./pages/startup/LLP";
import PrivateLimited from "./pages/startup/PrivateLimited";

/* LICENSE */

import GST from "./pages/license/GST";
import MSME from "./pages/license/MSME";
import Gumasta from "./pages/license/Gumasta";
import EPFOESIC from "./pages/license/EPFOESIC";
import PTECPTRC from "./pages/license/PTECPTRC";
import IEC from "./pages/license/IEC";
import PSARA from "./pages/license/PSARA";


/* igr */

import ReraAgentLicense from "./pages/igr/ReraAgentLicense";
import ReraProjectRegistration from "./pages/igr/ReraProjectRegistration";
import ReraComplaint from "./pages/igr/ReraComplaint";
import OnlineLeaveLicense from "./pages/igr/OnlineLeaveLicense";
import SaleAgreement from "./pages/igr/SaleAgreement";
import CidcoMahadaTransfer from "./pages/igr/CidcoMahadaTransfer";

/* tender */

import VendorManagement from "./pages/tender/VendorManagement";
import TenderFilling from "./pages/tender/TenderFilling";
import DigitalSignature from "./pages/tender/DigitalSignature";
import GEMManagement from "./pages/tender/GEMManagement";





import "./App.css";

/* =============================== */
/* HOME PAGE COMPONENT             */
/* =============================== */
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          {/* LEFT TEXT */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span>The Localise</span>
              <span>Welcomes You</span>
            </h1>

            <h2>
              At The Localise, we are a Business Consultancy Agency dedicated to
              helping businesses start and grow. Our services include Startup
              Registration, Business Licensing, Digital Marketing, and tools
              that empower MSMEs to succeed.
            </h2>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image">
            <img src="/hero-image.png" alt="Localise Business Services" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <OurServices />

      {/* SLIDER */}
      <ImageSlider />
    </>
  );
};

/* =============================== */
/* APP ROUTES                      */
/* =============================== */
function App() {
  return (
    <Router>
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* BLOGS */}
        <Route path="/blogs" element={<Blogs />} />

        {/* SEO-FRIENDLY SERVICE PAGE */}
        <Route
          path="/startup-india-registration"
          element={<StartupIndia />}
          />
          <Route
          path="/one-person-company-opc"
          element={<OPC />}
        />

        <Route
          path="/partnership-firm-registration"
          element={<Partnership />}
        />

        <Route
          path="/llp-registration"
          element={<LLP />}
        />

        <Route
          path="/private-limited-company"
          element={<PrivateLimited />}
        />

          {/* LICENSE & REGISTRATION ROUTES */}
<Route 
path="/gst-registration" 
element={<GST />} 
/>
<Route 
path="/msme-udyam-registration"
 element={<MSME />} 
 />
<Route 
path="/shop-act-gumasta-license" 
element={<Gumasta />} 
/>
<Route
 path="/epfo-esic-registration"
  element={<EPFOESIC />} 
  />

<Route path="/ptec-ptrc-registration" element={<PTECPTRC />} />
<Route path="/iec-registration" element={<IEC />} />
<Route path="/psara-license" element={<PSARA />} />

    {/* IGR & RERA ROUTES */}
<Route path="/rera-agent-license" element={<ReraAgentLicense />} />
<Route path="/rera-project-registration" element={<ReraProjectRegistration />} />
<Route path="/rera-complaint" element={<ReraComplaint />} />
<Route path="/online-leave-and-license" element={<OnlineLeaveLicense />} />
<Route path="/sale-agreement-registration" element={<SaleAgreement />} />
<Route path="/cidco-mahada-transfer" element={<CidcoMahadaTransfer />} />
        
        {/* TENDER SERVICES ROUTES */}
<Route path="/vendor-management-services" element={<VendorManagement />} />
<Route path="/tender-filling-services" element={<TenderFilling />} />
<Route path="/digital-signature-certificate-dsc" element={<DigitalSignature />} />
<Route path="/gem-portal-management" element={<GEMManagement />} />

        
      </Routes>
      <div className="app-wrapper">
  <Routes>
    {/* all pages */}
  </Routes>
</div>

      {/* GLOBAL FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;
