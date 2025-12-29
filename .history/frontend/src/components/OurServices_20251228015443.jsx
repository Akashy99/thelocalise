import React from "react";
import "../styles/OurServices.css";
import {
  FaRocket,
  FaFileAlt,
  FaBalanceScale,
  FaGavel,
} from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <FaRocket className="service-icon" />
          <h3>Startup Services</h3>
          <p>
            Company registration, compliance, and complete startup support to
            launch your business smoothly.
          </p>
        </div>

        <div className="service-card">
          <FaFileAlt className="service-icon" />
          <h3>Licenses & Registration</h3>
          <p>
            GST, MSME, Gumasta, IEC, and other mandatory registrations handled
            professionally.
          </p>
        </div>

        <div className="service-card">
          <FaBalanceScale className="service-icon" />
          <h3>IGR & RERA</h3>
          <p>
            RERA registration, property agreements, and legal documentation with
            expert guidance.
          </p>
        </div>

        <div className="service-card">
          <FaGavel className="service-icon" />
          <h3>Tender Services</h3>
          <p>
            Tender filing, DSC, GeM registration, and vendor management services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
