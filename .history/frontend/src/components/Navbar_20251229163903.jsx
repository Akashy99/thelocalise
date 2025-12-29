import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  /* CLOSE MENU ON LINK CLICK */
  const handleLinkClick = () => {
    setActiveMenu(null);
    setShowSearch(false);
    setMobileOpen(false);
  };

  /* CLICK OUTSIDE CLOSE */
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
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* BODY SCROLL LOCK WHEN MOBILE MENU OPEN */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/logo.png" alt="Localise Logo" />
          </Link>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* MENU */}
        <ul className={`menu ${mobileOpen ? "open" : ""}`} ref={menuRef}>
          {/* STARTUP */}
          <li onClick={() => toggleMenu("startup")}>
            STARTUP
            {activeMenu === "startup" && (
              <ul className="dropdown-menu">
                <li><Link to="/startup-india-registration" onClick={handleLinkClick}>Startup India</Link></li>
                <li><Link to="/one-person-company-opc" onClick={handleLinkClick}>OPC</Link></li>
                <li><Link to="/partnership-firm-registration" onClick={handleLinkClick}>Partnership</Link></li>
                <li><Link to="/llp-registration" onClick={handleLinkClick}>LLP</Link></li>
                <li><Link to="/private-limited-company" onClick={handleLinkClick}>Private Limited</Link></li>
              </ul>
            )}
          </li>

          {/* LICENSE */}
          <li onClick={() => toggleMenu("license")}>
            LICENSE & REGISTRATION
            {activeMenu === "license" && (
              <ul className="dropdown-menu">
                <li><Link to="/shop-act-gumasta-license" onClick={handleLinkClick}>Gumasta</Link></li>
                <li><Link to="/msme-udyam-registration" onClick={handleLinkClick}>MSME</Link></li>
                <li><Link to="/gst-registration" onClick={handleLinkClick}>GST</Link></li>
                <li><Link to="/epfo-esic-registration" onClick={handleLinkClick}>EPFO & ESIC</Link></li>
                <li><Link to="/ptec-ptrc-registration" onClick={handleLinkClick}>PTEC & PTRC</Link></li>
                <li><Link to="/iec-registration" onClick={handleLinkClick}>Import Export (IEC)</Link></li>
                <li><Link to="/psara-license" onClick={handleLinkClick}>PSARA License</Link></li>
              </ul>
            )}
          </li>

          {/* IGR */}
          <li onClick={() => toggleMenu("igr")}>
            IGR & RERA
            {activeMenu === "igr" && (
              <ul className="dropdown-menu">
                <li><Link to="/rera-agent-license" onClick={handleLinkClick}>RERA Agent License</Link></li>
                <li><Link to="/rera-project-registration" onClick={handleLinkClick}>RERA Project Registration</Link></li>
                <li><Link to="/rera-complaint" onClick={handleLinkClick}>RERA Complaint</Link></li>
                <li><Link to="/online-leave-and-license" onClick={handleLinkClick}>Online Leave & License</Link></li>
                <li><Link to="/sale-agreement-registration" onClick={handleLinkClick}>Sale Agreement</Link></li>
                <li><Link to="/cidco-mahada-transfer" onClick={handleLinkClick}>CIDCO & MHADA Transfer</Link></li>
              </ul>
            )}
          </li>

          {/* TENDER */}
          <li onClick={() => toggleMenu("tender")}>
            TENDER SERVICES
            {activeMenu === "tender" && (
              <ul className="dropdown-menu">
                <li><Link to="/vendor-management-services" onClick={handleLinkClick}>Vendor Management</Link></li>
                <li><Link to="/tender-filling-services" onClick={handleLinkClick}>Tender Filling</Link></li>
                <li><Link to="/digital-signature-certificate-dsc" onClick={handleLinkClick}>Digital Signature</Link></li>
                <li><Link to="/gem-portal-management" onClick={handleLinkClick}>GeM Management</Link></li>
              </ul>
            )}
          </li>

           {/* ✅ NEW: ABOUT */}
        <li>
          <Link to="/about-us" onClick={handleLinkClick}>
            ABOUT US
          </Link>
        </li>

        {/* ✅ NEW: CONTACT */}
        <li>
          <Link to="/contact-us" onClick={handleLinkClick}>
            CONTACT US
          </Link>
        </li>

          {/* BLOGS */}
          <li>
            <Link to="/blogs" onClick={handleLinkClick}>BLOGS</Link>
          </li>

          {/* SEARCH */}
          <li className="search-wrapper" ref={searchRef}>
            {!showSearch ? (
              <span className="search-icon" onClick={() => setShowSearch(true)}>
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
    </>
  );
};

export default Navbar;
