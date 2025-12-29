import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css";

const PTECPTRC = () => {
  return (
    <>
      <Helmet>
        <title>PTEC & PTRC Registration | Localise</title>
        <meta
          name="description"
          content="Professional Tax Registration (PTEC & PTRC) services by Localise. Talk with experts via call or WhatsApp."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          <div className="service-text">
            <h1>PTEC & PTRC Registration</h1>

            <p className="service-desc">
              Professional Tax Registration is mandatory for employers and
              professionals.
              <strong> Localise</strong> provides complete assistance for both
              PTEC and PTRC registration, including:
            </p>

            <ul className="service-points">
              <li>PTEC Registration for Professionals</li>
              <li>PTRC Registration for Employers</li>
              <li>Compliance with State Tax Laws</li>
              <li>Fast Online Registration Process</li>
              <li>Trusted by Businesses & Professionals</li>
            </ul>

            <div className="service-buttons">
              <a href="tel:+919999999999" className="btn call-btn">
                📞 Talk with Expert
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="service-image">
            <img src="/ptec-ptrc.png" alt="PTEC PTRC Registration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PTECPTRC;
