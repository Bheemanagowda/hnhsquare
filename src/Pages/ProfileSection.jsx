import React from "react";
import MainServicePage from "../components/MainServicePage";
import ProfileSectionImg from "../assets/images/profile-section/profile-section.jpg";
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

import Breadcrumb from "../components/Breadcrumb";

// ✅ Missing images

// Services data
const services = [
  { id: 1, name: "Slider Door ", image: kitchen },
  { id: 2, name: "Bathroom Partitions", image: wardrobe },
  { id: 3, name: "Open Door ", image: dining },
  { id: 4, name: "LED Mirrors", image: weekend },
  { id: 5, name: "Office Partitions ", image: tv },
  { id: 6, name: "Open Shutters", image: desk },
  { id: 7, name: "Pooja Doors", image: account_tree },
  { id: 8, name: "Profile Showcase", image: lightbulb },
  { id: 9, name: "Sliding Door For Room Entrance", image: wallpaper },
  { id: 10, name: "Wall Paint", image: format_paint },
  { id: 11, name: "Walkin Closet", image: bathtub },
];

const description = [
  "At HNH Square Profile Shutters, our Profile Shutters offer a perfect blend of modern design and practical elegance. Crafted with precision, these shutters are ideal for kitchens, wardrobes, and storage units—enhancing both aesthetic appeal and usability.",

  "Whether you prefer minimalist aluminum frames, glass combinations, or custom finishes, we tailor every shutter to suit your unique space and style. Our designs not only elevate your interiors but also ensure durability, smooth operation, and easy maintenance.Designed to seamlessly blend with modern interiors, our profile shutters add a touch of sophistication to every corner. Experience the perfect fusion of beauty and performance—crafted to impress, built to last.",
];

const ProfileSection = () => {
  return (
    <div>
      <Breadcrumb
        pageTitle="Profie Section "
        backgroundImage={breadcrumbBg}
        className=""
      />
      <MainServicePage
        image={ProfileSectionImg}
        title={
          <>
            Minimal. Modern. Meaningful.{" "}
            <span className="color-text">Profile shutters</span> that complete
            your space.
          </>
        }
        description={description}
        services={services}
        heading={
          <>
            Profile Shutters <span className="color-text"> End-to-end </span>
            Solutions
          </>
        }
      />
    </div>
  );
};

export default ProfileSection;
