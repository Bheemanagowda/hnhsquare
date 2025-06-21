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
  // Create an array with repeated instances of the same logo
  // This will make the slider visibly slide through multiple "client" logos
  const clientLogoImages = [
    clientLogo1, // Logo 1
    clientLogo2, // Logo 2 (repeated)
    clientLogo3, // Logo 3 (repeated)
    clientLogo4, // Logo 4 (repeated)
    clientLogo5, // Logo 5 (repeated)
    clientLogo6, // Logo 6 (repeated)
  ];

  console.log("Client Logo Image Paths:", clientLogoImages);

  // Define breakpoints for responsive behavior of the client logo slider
  const clientLogoBreakpoints = {
    // When screen width is 320px or less, show 2 slides
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // When screen width is 480px or less, show 3 slides
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When screen width is 768px or less, show 4 slides
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // When screen width is 1024px or less, show 5 slides
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    // When screen width is 1200px or less, show 6 slides (default for larger screens)
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  return (
    <section className="client-logos-section p-5">
      <div className="container">
        <h2 className="text-center mb-2">Our Partners</h2>
        <UnderlineOnly className="mb-30" />
        <Slider
          images={clientLogoImages} // Pass the array of repeated logos
          className="client-slider-container " // For overall styling of the slider
          imageClassName="client-logo-image shadow" // For styling individual logo images
          showPagination={false} // Typically, client logo sliders don't need pagination dots
          showNavigation={false} // Typically, client logo sliders don't need navigation arrows
          slidesPerView={6} // Default number of logos to show for large screens (over 1200px)
          spaceBetween={50} // Default space between logos for large screens
          breakpoints={clientLogoBreakpoints} // Apply responsive settings
        />
      </div>
    </section>
  );
};

export default Clients;
