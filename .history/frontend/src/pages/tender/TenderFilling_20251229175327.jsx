import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const TenderFilling = () => {
  return (
    <>
      <Helmet>
        <title>Tender Filling Services | Localise</title>
        <meta
          name="description"
          content="Tender filling services by Localise. Talk with experts via call or WhatsApp and get accurate tender submission support."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Tender Filling Services</h1>

            <p className="service-desc">
              Tender filling is a critical process that requires precise
              documentation, compliance checks, and timely submission.
              <strong> Localise</strong> provides expert assistance to ensure
              your tenders are filed accurately and on time, including:
            </p>

            <ul className="service-points">
              <li>End-to-End Tender Documentation Support</li>
              <li>Compliance & Eligibility Verification</li>
              <li>Timely Submission of Tenders</li>
              <li>Error-Free Application Filing</li>
              <li>Trusted by Businesses Across Multiple Industries</li>
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
              src="/tender-filling.png"
              alt="Tender Filling Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TenderFilling;
