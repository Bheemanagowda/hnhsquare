import React from "react";
import Slider from "./Slider";
import banner1 from "../assets/images/mob-banner/1.jpg";
import banner2 from "../assets/images/mob-banner/2.jpg";
import banner3 from "../assets/images/mob-banner/3.jpg";
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
