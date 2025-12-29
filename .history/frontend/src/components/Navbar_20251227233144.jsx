import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side Logo */}
      <div className="logo">
        MyLogo
      </div>

      {/* Right Side Menu */}
      <ul className="menu">
        <li className="dropdown">
          STARTUP
          <ul className="dropdown-menu">
            <li>Startup India</li>
            <li>OPC (One Person Pvt)</li>
            <li>Partnership Firm</li>
            <li>LLP (Limited Liability Partnership)</li>
            <li>PVT (Private Limited Company)</li>
          </ul>
        </li>

        <li className="dropdown">
          LICENSE AND REGISTRATION
          <ul className="dropdown-menu">
            <li>Gumasta</li>
            <li>MSME (UDYAM)</li>
            <li>GST</li>
            <li>EPFO and ESIC</li>
            <li>PTEC and PTRC</li>
            <li>Import and Export (IEC)</li>
            <li>PSARA</li>
          </ul>
        </li>

        <li className="dropdown">
          IGR AND RERA
          <ul className="dropdown-menu">
            <li>RERA Agent Registration</li>
            <li>RERA Project Registration</li>
            <li>RERA Complaint</li>
            <li>Online Leave and License</li>
            <li>Sale Agreement Registration</li>
            <li>CIDCO and MHADA Transfer</li>
          </ul>
        </li>

        <li className="dropdown">
          TENDER SERVICES
          <ul className="dropdown-menu">
            <li>Vendor Management</li>
            <li>Tender Filling</li>
            <li>Digital Signature (DSC)</li>
            <li>Government e-Marketplace (GeM)</li>
          </ul>
        </li>

        {/* Search Icon */}
        <li className="search">🔍</li>
      </ul>
    </nav>
  );
};

export default Navbar;
