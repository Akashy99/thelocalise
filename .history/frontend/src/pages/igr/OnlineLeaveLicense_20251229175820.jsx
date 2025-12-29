import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const OnlineLeaveLicense = () => {
  return (
    <>
      <Helmet>
        <title>Online Leave and License Registration | Localise</title>
        <meta
          name="description"
          content="Online Leave and License agreement registration services by Localise. Talk with experts via call or WhatsApp for hassle-free registration."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Online Leave and License Registration</h1>

            <p className="service-desc">
              Online Leave and License registration ensures legally valid rental
              agreements between landlords and tenants.
              <strong> Localise</strong> provides fast, secure, and compliant
              online registration services, including:
            </p>

            <ul className="service-points">
              <li>Online Leave & License Agreement Registration</li>
              <li>Legally Valid Rental Documentation</li>
              <li>Biometric & Aadhaar-Based Verification</li>
              <li>Quick Processing with Government Portals</li>
              <li>Trusted by Property Owners & Tenants</li>
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
              src="/online-leave-license.png"
              alt="Online Leave and License Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineLeaveLicense;
