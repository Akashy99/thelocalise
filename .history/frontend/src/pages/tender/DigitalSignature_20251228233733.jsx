import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const DigitalSignature = () => {
  return (
    <>
      <Helmet>
        <title>Digital Signature Certificate (DSC) | Localise</title>
        <meta
          name="description"
          content="Digital Signature Certificate (DSC) services by Localise. Talk with experts via call or WhatsApp and get your DSC easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Digital Signature Certificate (DSC)</h1>

            <p className="service-desc">
              A Digital Signature Certificate (DSC) is mandatory for online
              tendering, e-filing, and secure digital transactions.
              <strong> Localise</strong> provides complete assistance for DSC
              issuance and renewal, including:
            </p>

            <ul className="service-points">
              <li>DSC for Tendering & Government Portals</li>
              <li>Class 3 Digital Signature Certificates</li>
              <li>Fast Issuance & Renewal Support</li>
              <li>Secure & Legally Valid Authentication</li>
              <li>Trusted by Businesses Across India</li>
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
              src="/digital-signature.png"
              alt="Digital Signature Certificate DSC"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalSignature;
