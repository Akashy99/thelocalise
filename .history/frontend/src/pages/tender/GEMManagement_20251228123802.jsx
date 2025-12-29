import React from "react";
import { Helmet } from "react-helmet-async";

const GEMManagement = () => {
  return (
    <>
      <Helmet>
        <title>GeM Portal Management Services | Localise</title>
        <meta
          name="description"
          content="Government e-Marketplace (GeM) portal management services by Localise."
        />
      </Helmet>

      <div className="page-container">
        <h1>Government e-Marketplace (GeM) Management</h1>
        <p>
          GeM portal management helps businesses sell products and services to
          government departments. Localise offers end-to-end GeM onboarding and
          management support.
        </p>
      </div>
    </>
  );
};

export default GEMManagement;
