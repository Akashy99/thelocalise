import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/AboutUs.css";


const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Localise Business Consultancy</title>
        <meta
          name="description"
          content="Learn about Localise – a trusted business consultancy agency helping startups and businesses with registration, licensing, compliance, and growth."
        />
      </Helmet>

      <section className="about-page">

        <h1>About Localise</h1>

        <p>
          <strong>Localise</strong> is a professional Business Consultancy Agency
          dedicated to helping startups, entrepreneurs, and growing businesses
          establish and scale successfully in India.
        </p>

        <p>
          We specialize in <strong>Startup Registrations</strong>, business
          licensing, government compliance, RERA & IGR services, tender support,
          and digital solutions tailored for MSMEs.
        </p>

        <p>
          Our mission is to simplify complex legal and regulatory processes so
          business owners can focus on growth while we handle compliance with
          accuracy and transparency.
        </p>

        <h2>Why Choose Localise?</h2>

        <ul>
          <li>✔ Experienced business consultants</li>
          <li>✔ End-to-end registration & compliance support</li>
          <li>✔ Transparent pricing with expert guidance</li>
          <li>✔ Trusted by 20,000+ businesses</li>
        </ul>
      </section>
    </>
  );
};

export default AboutUs;
