import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">
          <h3>Localise</h3>
          <p>
            Localise helps businesses grow digitally with professional services,
            compliance support, and local marketing solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h4>Contact Us</h4>

          <p>
            <FaEnvelope /> support@localise.com
          </p>
          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p>
            <FaWhatsapp /> +91 98765 43210
          </p>
          <p>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Mumbai, Maharashtra, India
            </a>
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Localise. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
