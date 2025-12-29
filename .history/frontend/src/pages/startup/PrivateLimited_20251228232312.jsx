import React from "react";
import { Helmet } from "react-helmet-async";
import "./StartupIndia.css"; // reuse same service layout CSS

const PrivateLimited = () => {
  return (
    <>
      <Helmet>
        <title>Private Limited Company Registration | Localise</title>
        <meta
          name="description"
          content="Private Limited Company registration services by Localise. Talk with experts via call or WhatsApp and start your company easily."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>Private Limited Company Registration</h1>

            <p className="service-desc">
              A Private Limited Company is the most preferred business structure
              for startups and growing businesses seeking funding and long-term
              scalability. <strong>Localise</strong> offers complete support,
              including:
            </p>

            <ul className="service-points">
              <li>Separate Legal Entity Status</li>
              <li>Limited Liability Protection</li>
              <li>Easy Fundraising & Investor Trust</li>
              <li>End-to-End Company Registration</li>
              <li>Trusted by 20,000+ Businesses</li>
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
              src="/private-limited-registration.png"
              alt="Private Limited Company Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateLimited;
