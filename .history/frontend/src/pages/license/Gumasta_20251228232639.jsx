import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const Gumasta = () => {
  return (
    <>
      <Helmet>
        <title>Gumasta License (Shop Act) Registration | Localise</title>
        <meta
          name="description"
          content="Gumasta (Shop Act) License registration services by Localise. Talk with experts via call or WhatsApp and get your shop license easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Gumasta (Shop Act) License</h1>

            <p className="service-desc">
              Gumasta License, also known as Shop Act License, is mandatory for
              businesses operating shops, offices, or commercial establishments.
              <strong> Localise</strong> provides complete support to ensure
              hassle-free registration, including:
            </p>

            <ul className="service-points">
              <li>Shop Act Registration for Businesses</li>
              <li>Mandatory Compliance with Local Authorities</li>
              <li>Quick Documentation & Online Filing</li>
              <li>Support for New & Existing Businesses</li>
              <li>Trusted by Thousands of Shop Owners</li>
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
              src="/gumasta-license.png"
              alt="Gumasta Shop Act License Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gumasta;
