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
    <footer className="footer" role="contentinfo">
      <div className="footer-container">

        {/* ABOUT / LOGO */}
        <div className="footer-section footer-logo-section">
          <img
            src="/logo.png"
            alt="Localise Business Consultancy Logo"
            className="footer-logo"
          />
          <p>
            The Localise is a Business Consultancy Agency helping
            startups and businesses grow through registrations, licensing,
            compliance, and digital solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav className="footer-section" aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* CONTACT INFO */}
        <address className="footer-section">
          <h4>Contact Us</h4>

          <p>
            <FaEnvelope />
            <a href="mailto:thelocalise@gmail.com">
            thelocalise@gmail.com
            </a>
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+919987456335">
              +91 9987456335
            </a>
          </p>

          <p>
            <FaWhatsapp />
            <a
              href="https://wa.me/919987456335"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>

          <p>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps?q=Mumbai,+Maharashtra,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mumbai, Maharashtra, India
            </a>
          </p>
        </address>

        {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/thelocalise"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>The Localise</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
