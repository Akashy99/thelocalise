import React from "react";
import { Helmet } from "react-helmet-async";
import "./StartupIndia.css"; // reuse same service layout CSS

const LLP = () => {
  return (
    <>
      <Helmet>
        <title>LLP Registration | Localise</title>
        <meta
          name="description"
          content="Limited Liability Partnership (LLP) registration services by Localise. Talk with experts via call or WhatsApp and start your LLP easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Limited Liability Partnership (LLP) Registration</h1>

            <p className="service-desc">
              A Limited Liability Partnership (LLP) combines the flexibility of a
              partnership with the benefits of limited liability.{" "}
              <strong>Localise</strong> simplifies LLP registration and offers:
            </p>

            <ul className="service-points">
              <li>Limited Liability Protection</li>
              <li>Flexible Business Structure</li>
              <li>Lower Compliance Compared to Companies</li>
              <li>Fast Registration & Documentation</li>
              <li>Trusted by 20,000+ Businesses</li>
            </ul>

            {/* ACTION BUTTONS */}
            <div className="service-buttons">
              <a href="tel:+919987456335" className="btn call-btn">
                📞 Talk with Expert
              </a>

              <a
                href="https://wa.me/919987456335"
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
              src="/llp-registration.png"
              alt="LLP Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LLP;
