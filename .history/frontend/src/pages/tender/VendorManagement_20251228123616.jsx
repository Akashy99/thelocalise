import React from "react";
import { Helmet } from "react-helmet-async";

const VendorManagement = () => {
  return (
    <>
      <Helmet>
        <title>Vendor Management Services | Localise</title>
        <meta
          name="description"
          content="Professional vendor management services by Localise for government and private tenders."
        />
      </Helmet>

      <div className="page-container">
        <h1>Vendor Management Services</h1>
        <p>
          Vendor management ensures smooth onboarding, documentation, and
          compliance for tender participation. Localise helps businesses manage
          vendors efficiently and professionally.
        </p>
      </div>
    </>
  );
};

export default VendorManagement;
