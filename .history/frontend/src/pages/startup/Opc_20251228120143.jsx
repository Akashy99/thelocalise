import React from "react";
import { Helmet } from "react-helmet-async";

const OPC = () => {
  return (
    <>
      <Helmet>
        <title>One Person Company Registration | Localise</title>
        <meta
          name="description"
          content="Register your One Person Company (OPC) easily with Localise. Ideal for solo entrepreneurs."
        />
      </Helmet>

      <div className="page-container">
        <h1>One Person Company (OPC)</h1>
        <p>
          OPC registration is best for solo entrepreneurs who want limited
          liability with full business control. Localise handles documentation,
          registration, and compliance.
        </p>
      </div>
    </>
  );
};

export default OPC;
