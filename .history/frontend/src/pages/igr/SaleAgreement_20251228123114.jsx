import React from "react";
import { Helmet } from "react-helmet-async";

const SaleAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Sale Agreement Registration | Localise</title>
        <meta
          name="description"
          content="Sale Agreement drafting and registration services by Localise."
        />
      </Helmet>

      <div className="page-container">
        <h1>Sale Agreement Registration</h1>
        <p>
          Sale Agreement legally records property transactions. Localise assists
          with drafting, stamp duty, and registration processes.
        </p>
      </div>
    </>
  );
};

export default SaleAgreement;
