import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const ReraProjectRegistration = () => {
  return (
    <>
      <Helmet>
        <title>RERA Project Registration | Localise</title>
        <meta
          name="description"
          content="RERA Project Registration services by Localise. Talk with experts via call or WhatsApp for hassle-free project approval."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>RERA Project Registration</h1>

            <p className="service-desc">
              RERA Project Registration is mandatory for builders and developers
              before advertising, marketing, or selling real estate projects.
              <strong> Localise</strong> provides end-to-end assistance to ensure
              smooth registration and full compliance, including:
            </p>

            <ul className="service-points">
              <li>RERA Registration for Residential & Commercial Projects</li>
              <li>Documentation & Application Filing</li>
              <li>Compliance with RERA Guidelines</li>
              <li>Approval Tracking & Follow-ups</li>
              <li>Trusted by Builders & Developers Across India</li>
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
              src="/rera-project-registration.png"
              alt="RERA Project Registration Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReraProjectRegistration;
