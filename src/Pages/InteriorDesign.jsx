import React from "react";
import MainServicePage from "../components/MainServicePage";
import interiorImg from "../assets/images/interior-design/abt.jpg";
import breadcrumbBg from "../assets/images/bg/innerbg1.jpg";

// Images
import kitchen from "../assets/images/interior-design/modular-kitchen-interior-design-services.png";
import wardrobe from "../assets/images/interior-design/modular-kitchen-interior-design-services.png";
import weekend from "../assets/images/interior-design/modular-kitchen-interior-design-services.png";
import dining from "../assets/images/interior-design/crockery-unit.png";
import tv from "../assets/images/interior-design/crockery-unit.png";
import desk from "../assets/images/interior-design/crockery-unit.png";
import account_tree from "../assets/images/interior-design/crockery-unit.png";
import lightbulb from "../assets/images/interior-design/crockery-unit.png";
import wallpaper from "../assets/images/interior-design/crockery-unit.png";
import format_paint from "../assets/images/interior-design/crockery-unit.png";
import bathtub from "../assets/images/interior-design/crockery-unit.png";
import plumbing from "../assets/images/interior-design/crockery-unit.png";
import self_improvement from "../assets/images/interior-design/crockery-unit.png";
import home from "../assets/images/interior-design/crockery-unit.png";
import chair from "../assets/images/interior-design/crockery-unit.png";
import child_care from "../assets/images/interior-design/crockery-unit.png";
import workstation from "../assets/images/interior-design/crockery-unit.png";
import Breadcrumb from "../components/Breadcrumb";

// ✅ Missing images

// Services data
const services = [
  { id: 1, name: "Modular Kitchen", image: kitchen },
  { id: 2, name: "Storage and Wardrobe", image: wardrobe },
  { id: 3, name: "Crockery Units", image: dining },
  { id: 4, name: "Space Saving Furniture", image: weekend },
  { id: 5, name: "TV Units", image: tv },
  { id: 6, name: "Study Tables", image: desk },
  { id: 7, name: "False Ceiling", image: account_tree },
  { id: 8, name: "Lights", image: lightbulb },
  { id: 9, name: "Wallpaper", image: wallpaper },
  { id: 10, name: "Wall Paint", image: format_paint },
  { id: 11, name: "Bathroom", image: bathtub },
  { id: 12, name: "Utility Area", image: plumbing },
  { id: 13, name: "Pooja Unit", image: self_improvement },
  { id: 14, name: "Foyer Designs", image: home },
  { id: 15, name: "Movable Furniture", image: chair },
  { id: 16, name: "Kids Bedroom", image: child_care },
  { id: 17, name: "Guest Bedroom", image: dining },
  { id: 18, name: "Master Bedroom", image: tv },
  { id: 19, name: "Balcony Design", image: lightbulb },
  { id: 20, name: "Workstation", image: workstation },
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
