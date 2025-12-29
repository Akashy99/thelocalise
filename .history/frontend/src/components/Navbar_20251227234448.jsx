import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
      <img src="/logo.png" alt="Logo" />
      </div>

      {/* MENU */}
      <ul className="menu" ref={menuRef}>
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

        {/* SEARCH */}
        <li className="search-box">
          <input type="text" placeholder="Search services..." />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
