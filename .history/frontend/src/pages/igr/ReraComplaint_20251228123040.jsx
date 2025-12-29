import React from "react";
import { Helmet } from "react-helmet-async";

const ReraComplaint = () => {
  return (
    <>
      <Helmet>
        <title>RERA Complaint Filing | Localise</title>
        <meta
          name="description"
          content="File RERA complaints online with Localise for real estate disputes."
        />
      </Helmet>

      <div className="page-container">
        <h1>RERA Complaint Filing</h1>
        <p>
          RERA Complaint filing helps buyers and agents resolve disputes legally.
          Localise assists in drafting and online submission of complaints.
        </p>
      </div>
    </>
  );
};

export default ReraComplaint;
