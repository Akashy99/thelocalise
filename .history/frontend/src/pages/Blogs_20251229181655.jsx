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
          <p>
          Features of a Private Limited Company
          Benefits of a Private Limited Company (Pvt Ltd)
          Requirements to Register a Private Limited Company (Pvt Ltd)
          </p>
        </div>

        <div className="blog-card">
          <img src="/blog2.jpg" alt="Blog" />
          <h3>LLP Registration Fees in India: How Much Does It Cost?</h3>
          <p>
            Local SEO helps your business appear in nearby searches and drives
            more real customers.
          </p>
        </div>

        <div className="blog-card">
          <img src="/slider3.jpg" alt="Blog" />
          <h3>Top Marketing Tips for Small Businesses</h3>
          <p>
            Simple and effective marketing strategies every small business
            should use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
