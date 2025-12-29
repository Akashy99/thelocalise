import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css";

const IEC = () => {
  return (
    <>
      <Helmet>
        <title>Import Export Code (IEC) Registration | Localise</title>
        <meta
          name="description"
          content="IEC Registration services by Localise. Start your import-export business with expert guidance."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          <div className="service-text">
            <h1>Import Export Code (IEC) Registration</h1>

            <p className="service-desc">
              Import Export Code (IEC) is mandatory for businesses involved in
              international trade.
              <strong> Localise</strong> offers quick and hassle-free IEC
              registration, including:
            </p>

            <ul className="service-points">
              <li>IEC Registration with DGFT</li>
              <li>No Annual Compliance Required</li>
              <li>Mandatory for Import & Export</li>
              <li>Fast Online Application Filing</li>
              <li>Trusted by Exporters & Traders</li>
            </ul>

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

          <div className="service-image">
            <img src="/iec-registration.png" alt="IEC Registration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default IEC;
