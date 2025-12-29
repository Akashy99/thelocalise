import React from "react";
import { Helmet } from "react-helmet-async";
import "./StartupIndia.css"; // reuse same service layout CSS

const OPC = () => {
  return (
    <>
      <Helmet>
        <title>One Person Company Registration | Localise</title>
        <meta
          name="description"
          content="One Person Company (OPC) registration services by Localise. Talk with experts via call or WhatsApp and start your business easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>One Person Company (OPC) Registration</h1>

            <p className="service-desc">
              One Person Company (OPC) is ideal for solo entrepreneurs who want
              full business control with limited liability. <strong>Localise</strong>{" "}
              simplifies the OPC registration process and offers:
            </p>

            <ul className="service-points">
              <li>Complete OPC Registration Support</li>
              <li>Limited Liability Protection</li>
              <li>Single Owner with Corporate Status</li>
              <li>Fast Processing & Documentation</li>
              <li>Trusted by 20,000+ Entrepreneurs</li>
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
              src="/opc-registration.png"
              alt="One Person Company Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OPC;
