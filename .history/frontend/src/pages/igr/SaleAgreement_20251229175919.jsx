import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const SaleAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Sale Agreement Registration | Localise</title>
        <meta
          name="description"
          content="Sale Agreement registration services by Localise. Talk with experts via call or WhatsApp for legally compliant property agreements."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Sale Agreement Registration</h1>

            <p className="service-desc">
              A Sale Agreement legally records the terms and conditions of a
              property transaction between buyer and seller.
              <strong> Localise</strong> provides professional assistance for
              drafting, stamp duty calculation, and registration, including:
            </p>

            <ul className="service-points">
              <li>Drafting of Sale Agreement</li>
              <li>Stamp Duty & Registration Guidance</li>
              <li>Legally Valid Documentation</li>
              <li>Coordination with Sub-Registrar Office</li>
              <li>Trusted by Property Buyers & Sellers</li>
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
              src="/sale-agreement-registration.png"
              alt="Sale Agreement Registration Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SaleAgreement;
