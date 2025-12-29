import React from "react";
import "../styles/Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-heading">Our Blogs</h2>

      <div className="blogs-grid">
        <div className="blog-card">
          <img src="/blog1.png" alt="Blog" />
          <h3>What is a Private Limited Company? Meaning, Definition & Examples</h3>
          <p>
          Private Limited Company – Meaning and Definition
          Example of a Private Limited Company.
          </p>
          <p>
          Types of Private Limited Company (Pvt Ltd)
          a. Private Company Limited by Shares
          b. Private Company Limited by Guarantee
          </p>
          <p1>
          Features of a Private Limited Company
          Benefits of a Private Limited Company (Pvt Ltd)
          Requirements to Register a Private Limited Company (Pvt Ltd)
          </p1>
        </div>

        <div className="blog-card">
          <img src="/blog2.png" alt="Blog" />
          <h3>LLP Registration Fees in India: How Much Does It Cost?</h3>
          <p>
          What is Included in the LLP Registration Fee?
          1. Government Fees (MCA Fees)
          2. Professional Fees
          </p>
          <p>
          Government Fees for LLP Registration
          What is the Total Cost of LLP Registration in India?
          Post-Registration Compliance Costs
          </p>
          <p>
          A Limited Liability Partnership (LLP) is a business structure that blends the flexibility of a partnership with the protection of a company. Partners can manage the business directly while keeping their personal assets safe from business liabilities.
          </p>
        </div>

        <div className="blog-card">
          <img src="/blog3.png" alt="Blog" />
          <h3>Top Marketing Tips for Small Businesses</h3>
          <p>
          Starting a textile business can be an incredibly profitable venture, especially considering the ever-growing demand driven by the dynamic fashion industry trends and the rise in textile export business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
