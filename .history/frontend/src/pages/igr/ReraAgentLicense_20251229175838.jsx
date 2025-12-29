import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const ReraAgentLicense = () => {
  return (
    <>
      <Helmet>
        <title>RERA Agent License Registration | Localise</title>
        <meta
          name="description"
          content="RERA Agent License registration services by Localise. Talk with experts via call or WhatsApp for hassle-free registration."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>RERA Agent License</h1>

            <p className="service-desc">
              A RERA Agent License is mandatory for individuals or firms involved
              in buying, selling, or marketing real estate properties under the
              RERA Act.
              <strong> Localise</strong> provides complete assistance to ensure
              smooth registration and compliance, including:
            </p>

            <ul className="service-points">
              <li>RERA Agent Registration & Licensing</li>
              <li>Compliance with RERA Guidelines</li>
              <li>Documentation & Application Filing</li>
              <li>License Renewal & Ongoing Support</li>
              <li>Trusted by Real Estate Professionals</li>
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
              src="/rera-agent-license.png"
              alt="RERA Agent License Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReraAgentLicense;
