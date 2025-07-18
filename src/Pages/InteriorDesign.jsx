import React from "react";
import MainServicePage from "../components/MainServicePage";
import interiorImg from "../assets/images/interior-design/abt.jpg";
import breadcrumbBg from "../assets/images/bg/innerbg1.webp";

// Images
import i1 from "../assets/images/our-main-service/interior-design/1.png";
import i2 from "../assets/images/our-main-service/interior-design/2.png";
import i3 from "../assets/images/our-main-service/interior-design/3.png";
import i4 from "../assets/images/our-main-service/interior-design/4.png";
import i5 from "../assets/images/our-main-service/interior-design/5.png";
import i6 from "../assets/images/our-main-service/interior-design/6.png";
import i7 from "../assets/images/our-main-service/interior-design/7.png";
import i8 from "../assets/images/our-main-service/interior-design/8.png";
import i9 from "../assets/images/our-main-service/interior-design/9.png";
import i10 from "../assets/images/our-main-service/interior-design/10.png";
import i11 from "../assets/images/our-main-service/interior-design/11.png";
import i12 from "../assets/images/our-main-service/interior-design/12.png";
import i13 from "../assets/images/our-main-service/interior-design/13.png";
import i14 from "../assets/images/our-main-service/interior-design/14.png";
import i15 from "../assets/images/our-main-service/interior-design/15.png";
import i16 from "../assets/images/our-main-service/interior-design/16.png";
import i17 from "../assets/images/our-main-service/interior-design/17.png";
import i18 from "../assets/images/our-main-service/interior-design/18.png";
import i19 from "../assets/images/our-main-service/interior-design/19.png";
import i20 from "../assets/images/our-main-service/interior-design/20.png";
import Breadcrumb from "../components/Breadcrumb";

// ✅ Missing images

// Services data
const services = [
  { id: 1, name: "Modular Kitchen", image: i1 },
  { id: 2, name: "Storage and Wardrobe", image: i2 },
  { id: 3, name: "Crockery Units", image: i3 },
  { id: 4, name: "Space Saving Furniture", image: i4 },
  { id: 5, name: "TV Units", image: i5 },
  { id: 6, name: "Study Tables", image: i6 },
  { id: 7, name: "False Ceiling", image: i7 },
  { id: 8, name: "Lights", image: i8 },
  { id: 9, name: "Wallpaper", image: i9 },
  { id: 10, name: "Wall Paint", image: i10 },
  { id: 11, name: "Bathroom", image: i11 },
  { id: 12, name: "Utility Area", image: i12 },
  { id: 13, name: "Pooja Unit", image: i13 },
  { id: 14, name: "Foyer Designs", image: i14 },
  { id: 15, name: "Movable Furniture", image: i15 },
  { id: 16, name: "Kids Bedroom", image: i16 },
  { id: 17, name: "Guest Bedroom", image: i17 },
  { id: 18, name: "Master Bedroom", image: i18 },
  { id: 19, name: "Balcony Design", image: i19 },
  { id: 19, name: "Workstation", image: i20 },
];

const description = [
  "At HNH Square Interiors, we transform your vision into beautifully crafted living spaces. Our end-to-end interior design solutions are tailored to suit your lifestyle, taste, and budget — from space planning and concept design to complete execution and handover. Whether it's a modular kitchen, custom wardrobes, elegant false ceilings, or vibrant wall finishes, we manage everything under one roof with precision and care. With a strong focus on aesthetics, functionality, and timely delivery, we ensure a hassle-free experience that brings your dream home to life — just the way you imagined.",

  "Whether you're moving into a new home or looking to upgrade your existing space, our expert designers work with you from concept to completion — ensuring every corner of your home speaks your language.",
];

const InteriorDesign = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Interior Design"
        backgroundImage={breadcrumbBg}
        className=""
      />
      <MainServicePage
        image={interiorImg}
        title={
          <>
            Turning Ordinary <span className="color-text">Rooms into</span>{" "}
            Masterpieces
          </>
        }
        description={description}
        services={services}
        heading="Interior End-to-end Solutions"
      />
    </>
  );
};

export default InteriorDesign;
