import React from "react";
import { Helmet } from "react-helmet-async";

const LLP = () => {
  return (
    <>
      <Helmet>
        <title>LLP Registration | Localise</title>
        <meta
          name="description"
          content="Limited Liability Partnership (LLP) registration services with Localise. Flexible and secure business structure."
        />
      </Helmet>

      <div className="page-container">
        <h1>Limited Liability Partnership (LLP)</h1>
        <p>
          LLP combines benefits of partnership and limited liability. Localise
          offers complete LLP registration and ongoing compliance services.
        </p>
      </div>
    </>
  );
};

export default LLP;
