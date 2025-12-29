import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // CLOSE DROPDOWN OR SEARCH WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setActiveMenu(null);
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
  <Link to="/">
    <img src="/logo.png" alt="Logo" />
  </Link>
</div>


      {/* MENU */}
      <ul className="menu" ref={menuRef}>
        <li onClick={() => toggleMenu("startup")}>
          STARTUP
          {activeMenu === "startup" && (
            <ul className="dropdown-menu">
              <li>Startup India</li>
              <li>OPC</li>
              <li>Partnership</li>
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
              <li>MSME</li>
              <li>GST</li>
              <li>EPFO & ESIC</li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleMenu("igr")}>
          IGR & RERA
          {activeMenu === "igr" && (
            <ul className="dropdown-menu">
              <li>RERA Agent</li>
              <li>RERA Project</li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleMenu("tender")}>
          TENDER SERVICES
          {activeMenu === "tender" && (
            <ul className="dropdown-menu">
              <li>Tender Filling</li>
              <li>Digital Signature</li>
            </ul>
          )}
        </li>

        <li onClick={() => window.location.href = "/blogs"}>
  BLOGS
</li>


        {/* SEARCH ICON + INPUT */}
        <li className="search-wrapper" ref={searchRef}>
          {!showSearch ? (
            <span
              className="search-icon"
              onClick={() => setShowSearch(true)}
            >
              <FiSearch />
            </span>
          ) : (
            <input
              type="text"
              className="search-input"
              placeholder="Search services..."
              autoFocus
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
