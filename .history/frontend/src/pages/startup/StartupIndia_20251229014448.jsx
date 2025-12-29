import React from "react";
import { Helmet } from "react-helmet-async";
import "./StartupIndia.css";

const StartupIndia = () => {
  return (
    <>
      <Helmet>
        <title>Startup India Registration | Localise</title>
        <meta
          name="description"
          content="Startup India registration services by Localise. Talk with experts via call or WhatsApp and get your startup registered easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Startup India Registration</h1>

            <p className="service-desc">
              Get your Startup India registration done easily and legally to
              access government benefits, tax exemptions, and funding
              opportunities. <strong>Localise</strong> simplifies the entire
              process and offers:
            </p>

            <ul className="service-points">
              <li>Complete Application Filing</li>
              <li>Expert Startup Consultants</li>
              <li>Fast Processing & Approvals</li>
              <li>Compliance & Renewal Support</li>
              <li>Trusted by 20,000+ Businesses</li>
            </ul>

            {/* ACTION BUTTONS */}
            <div className="service-buttons">
              <a href="tel:+918082389611" className="btn call-btn">
                📞 Talk with Expert
              </a>

              <a
                href="https://wa.me/918082389611"
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
              src="/startup-india.png"
              alt="Startup India Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupIndia;
