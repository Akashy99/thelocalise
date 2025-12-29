import React from "react";
import { Helmet } from "react-helmet-async";

const MSME = () => {
  return (
    <>
      <Helmet>
        <title>MSME Udyam Registration | Localise</title>
        <meta
          name="description"
          content="Register your business under MSME (Udyam) with Localise and avail government benefits."
        />
      </Helmet>

      <div className="page-container">
        <h1>MSME (Udyam) Registration</h1>
        <p>
          MSME registration helps small businesses access government schemes,
          subsidies, and financial support. Localise ensures a smooth and fast
          registration process.
        </p>
      </div>
    </>
  );
};

export default MSME;
