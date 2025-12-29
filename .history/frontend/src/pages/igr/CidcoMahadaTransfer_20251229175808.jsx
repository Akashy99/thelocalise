import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const CidcoMahadaTransfer = () => {
  return (
    <>
      <Helmet>
        <title>CIDCO & MHADA Transfer Services | Localise</title>
        <meta
          name="description"
          content="CIDCO and MHADA property transfer services by Localise. Talk with experts via call or WhatsApp for hassle-free transfer."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>CIDCO & MHADA Transfer</h1>

            <p className="service-desc">
              CIDCO and MHADA property transfer involves legal documentation,
              approvals, and compliance with government authorities.
              <strong> Localise</strong> provides complete end-to-end assistance
              to ensure smooth and timely transfer, including:
            </p>

            <ul className="service-points">
              <li>CIDCO Property Transfer Assistance</li>
              <li>MHADA Flat Ownership Transfer</li>
              <li>Legal Documentation & Compliance</li>
              <li>Coordination with Government Authorities</li>
              <li>Trusted by Property Owners Across Maharashtra</li>
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
              src="/cidco-mahada-transfer.png"
              alt="CIDCO and MHADA Property Transfer Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CidcoMahadaTransfer;
