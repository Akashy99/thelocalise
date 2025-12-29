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
          content="Contact Localise for startup registration, licensing, compliance, RERA, and tender services. Call or WhatsApp our experts today."
        />
      </Helmet>

      <section className="contact-page">
      <div className="contact-details">

        <h1>Contact Us</h1>

        <p>
          Have questions or need expert guidance? Reach out to <strong>Localise</strong> —
          our team is here to help you every step of the way.
        </p>

        <div style={{ marginTop: "30px" }}>
          <p>
            <FaPhoneAlt />{" "}
            <a href="tel:+918082389611">+91 80823 89611</a>
          </p>

          <p>
            <FaWhatsapp />{" "}
            <a
              href="https://wa.me/918082389611"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>

          <p>
            <FaEnvelope />{" "}
            <a href="mailto:support@localise.com">
              support@localise.com
            </a>
          </p>

          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps?q=Mumbai,+Maharashtra,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mumbai, Maharashtra, India
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
