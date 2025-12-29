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
          <img src="/logo.png" alt="Localise Logo" />
        </Link>
      </div>

      {/* MENU */}
      <ul className="menu" ref={menuRef}>
        {/* STARTUP */}
        <li onClick={() => toggleMenu("startup")}>
          STARTUP
          {activeMenu === "startup" && (
            <ul className="dropdown-menu">
              <li><Link to="/startup-india-registration">Startup India</Link></li>
              <li><Link to="/one-person-company-opc">OPC</Link></li>
              <li><Link to="/partnership-firm-registration">Partnership</Link></li>
              <li><Link to="/llp-registration">LLP</Link></li>
              <li><Link to="/private-limited-company">Private Limited</Link></li>
            </ul>
          )}
        </li>

        {/* LICENSE */}
        <li onClick={() => toggleMenu("license")}>
          LICENSE & REGISTRATION
          {activeMenu === "license" && (
            <ul className="dropdown-menu">
              <li><Link to="/shop-act-gumasta-license">Gumasta</Link></li>
              <li><Link to="/msme-udyam-registration">MSME</Link></li>
              <li><Link to="/gst-registration">GST</Link></li>
              <li><Link to="/epfo-esic-registration">EPFO & ESIC</Link></li>
            </ul>
          )}
        </li>

        {/* IGR */}
        <li onClick={() => toggleMenu("igr")}>
          IGR & RERA
          {activeMenu === "igr" && (
            <ul className="dropdown-menu">
              <li><Link to="/rera-agent-registration">RERA Agent</Link></li>
              <li><Link to="/rera-project-registration">RERA Project</Link></li>
            </ul>
          )}
        </li>

        {/* TENDER */}
        <li onClick={() => toggleMenu("tender")}>
          TENDER SERVICES
          {activeMenu === "tender" && (
            <ul className="dropdown-menu">
              <li><Link to="/tender-filling-services">Tender Filling</Link></li>
              <li><Link to="/digital-signature-certificate-dsc">Digital Signature</Link></li>
            </ul>
          )}
        </li>

        {/* BLOGS */}
        <li>
          <Link to="/blogs">BLOGS</Link>
        </li>

        {/* SEARCH */}
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
