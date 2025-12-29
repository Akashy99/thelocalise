import React from "react";
import { Helmet } from "react-helmet-async";
import "../startup/StartupIndia.css"; // reuse same service layout CSS

const ReraComplaint = () => {
  return (
    <>
      <Helmet>
        <title>RERA Complaint Filing | Localise</title>
        <meta
          name="description"
          content="RERA complaint filing services by Localise. Talk with experts via call or WhatsApp for legal dispute resolution."
        />
      </Helmet>

      <section className="service-page">
        <div className="service-content">
          {/* LEFT CONTENT */}
          <div className="service-text">
            <h1>RERA Complaint Filing</h1>

            <p className="service-desc">
              RERA Complaint filing helps homebuyers, agents, and developers
              resolve real estate disputes legally under the RERA Act.
              <strong> Localise</strong> provides professional assistance to
              ensure proper drafting and timely filing of complaints, including:
            </p>

            <ul className="service-points">
              <li>Drafting of RERA Complaints</li>
              <li>Online Filing with RERA Authorities</li>
              <li>Legal Documentation & Compliance</li>
              <li>Guidance Throughout the Complaint Process</li>
              <li>Trusted by Homebuyers & Real Estate Professionals</li>
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
              src="/rera-complaint.png"
              alt="RERA Complaint Filing Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReraComplaint;
