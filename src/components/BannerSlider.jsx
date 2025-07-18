// src/components/BannerSlider.jsx
import React from "react";
import Slider from "./Slider";

// Banner images
import banner1 from "../assets/images/banners/1.webp";
import banner2 from "../assets/images/banners/2.webp";
import banner3 from "../assets/images/banners/3.webp";

const bannerImages = [banner1, banner2, banner3];

const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <Slider
        images={bannerImages}
        showPagination={false}
        showNavigation={false}
        className="w-full"
      />
    </div>
  );
};

export default BannerSlider;
