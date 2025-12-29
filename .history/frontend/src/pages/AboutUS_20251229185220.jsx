import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Localise Business Consultancy</title>
        <meta
          name="description"
          content="Learn about Localise – a trusted business consultancy agency helping startups and businesses with registration, licensing, compliance, and growth."
        />
      </Helmet>

      <section className="about-page animate-section" ref={sectionRef}>
        <div className="about-content">
          
          {/* LEFT TEXT */}
          <div className="about-text">
            <h1>About The Localise</h1>

            <p>
              <strong>Localise</strong> is a professional Business Consultancy
              Agency helping startups and businesses grow with expert
              registration, licensing, and compliance solutions.
            </p>

            <p>
              We simplify complex government procedures so entrepreneurs can
              focus on building successful businesses with confidence.
            </p>

            <h2>Why Choose The Localise?</h2>
            <ul>
              <li>Experienced business consultants</li>
              <li>End-to-end compliance support</li>
              <li>Transparent pricing</li>
              <li>Trusted by 20,000+ businesses</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image">
            <img src="/about-us.png" alt="Localise Consultancy" />
          </div>

        </div>

        {/* TRUST BADGES */}
        <div className="trust-section">
          <div className="trust-badge">20,000+ Clients</div>
          <div className="trust-badge">Government Compliant</div>
          <div className="trust-badge">ISO Process Driven</div>
          <div className="trust-badge">Trusted Since 2018</div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
