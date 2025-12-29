import React from "react";
import { Helmet } from "react-helmet-async";

const ReraProjectRegistration = () => {
  return (
    <>
      <Helmet>
        <title>RERA Project Registration | Localise</title>
        <meta
          name="description"
          content="RERA Project Registration services by Localise for builders and developers."
        />
      </Helmet>

      <div className="page-container">
        <h1>RERA Project Registration</h1>
        <p>
          Builders and developers must register projects under RERA before
          marketing or selling. Localise handles documentation and end-to-end
          filing.
        </p>
      </div>
    </>
  );
};

export default ReraProjectRegistration;
