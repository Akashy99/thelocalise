import React, { useState } from "react";
import "../styles/FloatingActions.css";
import { FaPhoneAlt, FaWhatsapp, FaComments } from "react-icons/fa";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-actions">
      
      {/* ACTION BUTTONS */}
      {open && (
        <div className="floating-menu">
          <a href="tel:+918082389611" className="floating-btn call">
            <FaPhoneAlt />
            <span>Talk with Expert</span>
          </a>

          <a
            href="https://wa.me/918082389611"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp"
          >
            <FaWhatsapp />
            <span>Chat with Expert</span>
          </a>
        </div>
      )}

      {/* MAIN FLOATING CIRCLE */}
      <button
        className={`floating-main ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact options"
      >
        <FaComments />
      </button>
    </div>
  );
};

export default FloatingActions;
