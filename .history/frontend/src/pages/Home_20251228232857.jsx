import React from "react";
import { Helmet } from "react-helmet-async";
import ImageSlider from "../components/ImageSlider";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <>
      {/* SEO FOR HOME PAGE */}
      <Helmet>
        <title>Localise | Business Registration & Compliance Experts</title>
        <meta
          name="description"
          content="Localise helps businesses with Startup Registration, GST, MSME, RERA, Tender Services, and compliance. Talk to experts via call or WhatsApp."
        />
      </Helmet>

      {/* IMAGE SLIDER */}
      <section>
        <ImageSlider />
      </section>

      {/* SERVICES SECTION */}
      <section>
        <OurServices />
      </section>
    </>
  );
};

export default Home;
