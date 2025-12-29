import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const GEMManagement = () => {
  return (
    <>
      <Helmet>
        <title>GeM Portal Management Services | Localise</title>
        <meta
          name="description"
          content="GeM portal management services by Localise. Talk with experts via call or WhatsApp and sell to government departments easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Government e-Marketplace (GeM) Management</h1>

            <p className="service-desc">
              The Government e-Marketplace (GeM) portal enables businesses to
              sell products and services directly to government departments.
              <strong> Localise</strong> provides complete GeM portal management
              support to help you grow your government sales, including:
            </p>

            <ul className="service-points">
              <li>GeM Seller Registration & Onboarding</li>
              <li>Product & Service Listing Support</li>
              <li>Bid Participation & Order Management</li>
              <li>Compliance with GeM Guidelines</li>
              <li>Trusted by Vendors Across India</li>
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
              src="/gem-management.png"
              alt="GeM Portal Management Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GEMManagement;
