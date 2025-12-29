import React from "react";
import { Helmet } from "react-helmet-async";

const DigitalSignature = () => {
  return (
    <>
      <Helmet>
        <title>Digital Signature Certificate (DSC) | Localise</title>
        <meta
          name="description"
          content="Get Digital Signature Certificate (DSC) for tenders and compliance with Localise."
        />
      </Helmet>

      <div className="page-container">
        <h1>Digital Signature Certificate (DSC)</h1>
        <p>
          Digital Signature Certificates are mandatory for online tendering and
          secure transactions. Localise assists with DSC issuance and renewal.
        </p>
      </div>
    </>
  );
};

export default DigitalSignature;
