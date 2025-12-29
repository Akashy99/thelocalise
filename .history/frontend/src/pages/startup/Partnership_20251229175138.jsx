import React from "react";
import { Helmet } from "react-helmet-async";
import "./StartupIndia.css"; // reuse same service layout CSS

const Partnership = () => {
  return (
    <>
      <Helmet>
        <title>Partnership Firm Registration | Localise</title>
        <meta
          name="description"
          content="Partnership Firm registration services by Localise. Talk with experts via call or WhatsApp and start your business with ease."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Partnership Firm Registration</h1>

            <p className="service-desc">
              A Partnership Firm is ideal for businesses run by two or more
              individuals who share profits and responsibilities.{" "}
              <strong>Localise</strong> ensures a smooth and legally compliant
              partnership registration process, offering:
            </p>

            <ul className="service-points">
              <li>Partnership Deed Drafting</li>
              <li>Legal Registration Support</li>
              <li>Simple Business Structure</li>
              <li>Fast Documentation & Processing</li>
              <li>Trusted by 20,000+ Businesses</li>
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
              src="/partnership-registration.png"
              alt="Partnership Firm Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnership;
