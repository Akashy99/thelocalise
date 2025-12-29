import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const EPFOESIC = () => {
  return (
    <>
      <Helmet>
        <title>EPFO & ESIC Registration | Localise</title>
        <meta
          name="description"
          content="EPFO and ESIC registration services by Localise. Talk with experts via call or WhatsApp and ensure employee compliance easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>EPFO & ESIC Registration</h1>

            <p className="service-desc">
              EPFO and ESIC registrations are mandatory for employers to provide
              social security and health benefits to employees.{" "}
              <strong>Localise</strong> offers complete assistance to ensure
              smooth registration and compliance, including:
            </p>

            <ul className="service-points">
              <li>EPFO Registration for Employee Provident Fund</li>
              <li>ESIC Registration for Employee Health Benefits</li>
              <li>Mandatory Employer Compliance Support</li>
              <li>Quick Documentation & Filing</li>
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
              src="/epfo-esic-registration.png"
              alt="EPFO and ESIC Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EPFOESIC;
