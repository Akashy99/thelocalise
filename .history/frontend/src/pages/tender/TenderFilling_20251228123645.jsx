import React from "react";
import { Helmet } from "react-helmet-async";

const TenderFilling = () => {
  return (
    <>
      <Helmet>
        <title>Tender Filling Services | Localise</title>
        <meta
          name="description"
          content="Tender filling services by Localise. Accurate documentation and timely submission support."
        />
      </Helmet>

      <div className="page-container">
        <h1>Tender Filling Services</h1>
        <p>
          Tender filling requires precise documentation and strict compliance.
          Localise provides expert assistance for preparing and submitting
          tenders on time.
        </p>
      </div>
    </>
  );
};

export default TenderFilling;
