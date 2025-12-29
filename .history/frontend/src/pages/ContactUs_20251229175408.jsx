import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/ContactUs.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Localise Business Consultancy</title>
        <meta
          name="description"
          content="Contact Localise for startup registration, licensing, compliance, RERA, and tender services. Talk or chat with our experts today."
        />
      </Helmet>

      <section className="contact-page">
        <div className="contact-box">
          
          {/* HEADING */}
          <h1>Contact Us</h1>

          <p className="contact-intro">
            Have questions or need expert guidance?  
            Connect with <strong>Localise</strong> — our experts are ready to help you.
          </p>

          {/* ACTION BUTTONS */}
          <div className="contact-actions">
            <a href="tel:+919987456335" className="contact-btn call-btn">
              <FaPhoneAlt /> Talk with Expert
            </a>

            <a
              href="https://wa.me/919987456335"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn whatsapp-btn"
            >
              <FaWhatsapp /> Chat with Expert
            </a>
          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-info">
            <p>
              <FaEnvelope />
              <a href="mailto:support@localise.com">
                support@localise.com
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
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
