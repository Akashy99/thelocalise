import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const VendorManagement = () => {
  return (
    <>
      <Helmet>
        <title>Vendor Management Services | Localise</title>
        <meta
          name="description"
          content="Vendor management services by Localise. Talk with experts via call or WhatsApp and manage your tender vendors efficiently."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Vendor Management Services</h1>

            <p className="service-desc">
              Vendor management plays a crucial role in successful tender
              participation by ensuring proper onboarding, documentation, and
              compliance.
              <strong> Localise</strong> offers end-to-end vendor management
              services, including:
            </p>

            <ul className="service-points">
              <li>Vendor Onboarding & Documentation Support</li>
              <li>Compliance Management for Tenders</li>
              <li>Coordination with Government & Private Authorities</li>
              <li>Streamlined Vendor Communication</li>
              <li>Trusted by Businesses Across India</li>
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
              src="/vendor-management.png"
              alt="Vendor Management Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorManagement;
