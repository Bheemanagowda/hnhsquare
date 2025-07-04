// src/components/ClientLogos.jsx
import React from "react";
import Slider from "./Slider";
import "../styles/ClientsLogo.css"; // Ensure this CSS file exists and is linked correctly
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

// Import your single client logo image (footer.jpg in this case)
import clientLogo1 from "../assets/images/vendors/1.jpg";
import clientLogo2 from "../assets/images/vendors/2.jpg";
import clientLogo3 from "../assets/images/vendors/3.jpg";
import clientLogo4 from "../assets/images/vendors/4.jpg";
import clientLogo5 from "../assets/images/vendors/5.jpg";
import clientLogo6 from "../assets/images/vendors/6.jpg";

const Clients = () => {
  // Array of logo image paths
  const clientLogoImages = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
  ];

  // Breakpoints for responsive slider
  const clientLogoBreakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  // Render each image with lazy loading inside the Slider
  const renderLogo = (logo, index) => (
    <img
      key={index}
      src={logo}
      alt={`Client Logo ${index + 1}`}
      loading="lazy"
      className="client-logo-image shadow"
    />
  );

  return (
    <section className="client-logos-section p-space">
      <div className="container">
        <h2 className="text-center title mb-4">
          Our <span className="color-text"> Partners</span>
        </h2>
        <UnderlineOnly className="mb-30" />
        <Slider
          items={clientLogoImages} // Pass the logos
          renderItem={renderLogo} // Use render function to include lazy loading
          className="client-slider-container"
          showPagination={false}
          showNavigation={false}
          slidesPerView={6}
          spaceBetween={50}
          breakpoints={clientLogoBreakpoints}
        />
      </div>
    </section>
  );
};

export default Clients;
