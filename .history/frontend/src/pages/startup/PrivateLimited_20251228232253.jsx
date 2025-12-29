import React from "react";
import { Helmet } from "react-helmet-async";

const PrivateLimited = () => {
  return (
    <>
      <Helmet>
        <title>Private Limited Company Registration | Localise</title>
        <meta
          name="description"
          content="Private Limited Company registration with Localise. Ideal for growing startups and investors."
        />
      </Helmet>

      <div className="page-container">
        <h1>Private Limited Company</h1>
        <p>
          Private Limited Company is ideal for scalable businesses. Localise
          provides registration, compliance, and legal support from start to
          growth.
        </p>
      </div>
    </>
  );
};

export default PrivateLimited;
