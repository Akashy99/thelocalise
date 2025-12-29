import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css";

const PSARA = () => {
  return (
    <>
      <Helmet>
        <title>PSARA License Registration | Localise</title>
        <meta
          name="description"
          content="PSARA License registration services by Localise for security agencies."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          <div className="service-text">
            <h1>PSARA License Registration</h1>

            <p className="service-desc">
              PSARA License is mandatory for private security agencies operating
              in India.
              <strong> Localise</strong> provides end-to-end PSARA registration
              support, including:
            </p>

            <ul className="service-points">
              <li>PSARA License Registration</li>
              <li>Police Verification & Documentation</li>
              <li>State-wise Compliance Support</li>
              <li>Coordination with Authorities</li>
              <li>Trusted by Security Agencies</li>
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
            <img src="/psara-license.png" alt="PSARA License Registration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PSARA;
