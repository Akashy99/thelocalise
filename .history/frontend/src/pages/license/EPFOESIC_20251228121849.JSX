import React from "react";
import { Helmet } from "react-helmet-async";

const EPFOESIC = () => {
  return (
    <>
      <Helmet>
        <title>EPFO & ESIC Registration | Localise</title>
        <meta
          name="description"
          content="EPFO and ESIC registration services by Localise. Ensure employee benefits and legal compliance."
        />
      </Helmet>

      <div className="page-container">
        <h1>EPFO & ESIC Registration</h1>
        <p>
          EPFO and ESIC registrations are mandatory for employers to provide
          social security benefits to employees. Localise assists with complete
          registration and compliance.
        </p>
      </div>
    </>
  );
};

export default EPFOESIC;
