import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const MSME = () => {
  return (
    <>
      <Helmet>
        <title>MSME Udyam Registration | Localise</title>
        <meta
          name="description"
          content="MSME (Udyam) registration services by Localise. Talk with experts via call or WhatsApp and avail government benefits easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>MSME (Udyam) Registration</h1>

            <p className="service-desc">
              MSME (Udyam) registration helps small and medium businesses avail
              government benefits, subsidies, and financial support.
              <strong> Localise</strong> offers complete assistance to ensure
              smooth and quick registration, including:
            </p>

            <ul className="service-points">
              <li>Udyam Registration for Micro, Small & Medium Enterprises</li>
              <li>Access to Government Schemes & Subsidies</li>
              <li>Collateral-Free Loan Benefits</li>
              <li>Quick Online Registration Process</li>
              <li>Trusted by Thousands of MSMEs</li>
            </ul>

            {/* ACTION BUTTONS */}
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

          {/* RIGHT IMAGE */}
          <div className="service-image">
            <img
              src="/msme-udyam-registration.png"
              alt="MSME Udyam Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MSME;
