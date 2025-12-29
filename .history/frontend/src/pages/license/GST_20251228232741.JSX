import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const GST = () => {
  return (
    <>
      <Helmet>
        <title>GST Registration | Localise</title>
        <meta
          name="description"
          content="GST registration services by Localise. Talk with experts via call or WhatsApp and get GST registration done easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>GST Registration</h1>

            <p className="service-desc">
              GST registration is mandatory for businesses whose turnover
              exceeds the prescribed limit or who are required to register under
              GST law. <strong>Localise</strong> provides complete GST
              registration and compliance support, including:
            </p>

            <ul className="service-points">
              <li>GST Registration for Businesses & Professionals</li>
              <li>Guidance on GST Compliance & Returns</li>
              <li>Fast Online Application Filing</li>
              <li>Support for New & Existing Businesses</li>
              <li>Trusted by Thousands of GST Registered Clients</li>
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
              src="/gst-registration.png"
              alt="GST Registration Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GST;
