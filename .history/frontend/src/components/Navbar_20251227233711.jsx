import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        My<span>Logo</span>
      </div>

      {/* MENU */}
      <ul className="menu">
        {/* STARTUP */}
        <li onClick={() => toggleMenu("startup")}>
          STARTUP
          {activeMenu === "startup" && (
            <ul className="dropdown-menu">
              <li>Startup India</li>
              <li>OPC (One Person Pvt)</li>
              <li>Partnership Firm</li>
              <li>LLP</li>
              <li>Private Limited</li>
            </ul>
          )}
        </li>

        {/* LICENSE */}
        <li onClick={() => toggleMenu("license")}>
          LICENSE & REGISTRATION
          {activeMenu === "license" && (
            <ul className="dropdown-menu">
              <li>Gumasta</li>
              <li>MSME (UDYAM)</li>
              <li>GST</li>
              <li>EPFO & ESIC</li>
              <li>PTEC & PTRC</li>
              <li>IEC</li>
              <li>PSARA</li>
            </ul>
          )}
        </li>

        {/* IGR */}
        <li onClick={() => toggleMenu("igr")}>
          IGR & RERA
          {activeMenu === "igr" && (
            <ul className="dropdown-menu">
              <li>RERA Agent</li>
              <li>RERA Project</li>
              <li>RERA Complaint</li>
              <li>Leave & License</li>
              <li>Sale Agreement</li>
            </ul>
          )}
        </li>

        {/* TENDER */}
        <li onClick={() => toggleMenu("tender")}>
          TENDER SERVICES
          {activeMenu === "tender" && (
            <ul className="dropdown-menu">
              <li>Vendor Management</li>
              <li>Tender Filling</li>
              <li>Digital Signature</li>
              <li>GeM Registration</li>
            </ul>
          )}
        </li>

        {/* SEARCH BOX */}
        <li className="search-box">
          <input type="text" placeholder="Search services..." />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
