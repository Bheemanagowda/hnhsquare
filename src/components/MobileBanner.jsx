import React from "react";
import Slider from "./Slider";
import banner1 from "../assets/images/mob-banner/1.webp";
import banner2 from "../assets/images/mob-banner/2.webp";
import banner3 from "../assets/images/mob-banner/3.webp";
import "../styles/MobileBanner.css";

const bannerImages = [banner1, banner2, banner3];

const MobileBanner = () => {
  return (
    <div className="mobile-slider">
      <Slider
        images={bannerImages}
        showPagination={false}
        showNavigation={false}
      />
    </div>
  );
};

export default MobileBanner;
