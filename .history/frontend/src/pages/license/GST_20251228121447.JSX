import React from "react";
import { Helmet } from "react-helmet-async";

const GST = () => {
  return (
    <>
      <Helmet>
        <title>GST Registration | Localise</title>
        <meta
          name="description"
          content="Get GST registration done easily with Localise. Expert support for GST compliance and filing."
        />
      </Helmet>

      <div className="page-container">
        <h1>GST Registration</h1>
        <p>
          GST registration is mandatory for businesses exceeding the prescribed
          turnover. Localise helps you obtain GST registration quickly with full
          compliance support.
        </p>
      </div>
    </>
  );
};

export default GST;
