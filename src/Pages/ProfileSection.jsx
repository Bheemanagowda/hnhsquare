import React from "react";
import MainServicePage from "../components/MainServicePage";
import ProfileSectionImg from "../assets/images/profile-section/profile-section.jpg";
import breadcrumbBg from "../assets/images/bg/innerbg1.jpg";

// Images
import p1 from "../assets/images/our-main-service/profile-section/1.png";
import p2 from "../assets/images/our-main-service/profile-section/2.png";
import p3 from "../assets/images/our-main-service/profile-section/3.png";
import p4 from "../assets/images/our-main-service/profile-section/4.png";
import p5 from "../assets/images/our-main-service/profile-section/5.png";
import p6 from "../assets/images/our-main-service/profile-section/6.png";
import p7 from "../assets/images/our-main-service/profile-section/7.png";
import p8 from "../assets/images/our-main-service/profile-section/8.png";
import p9 from "../assets/images/our-main-service/profile-section/9.png";
import p10 from "../assets/images/our-main-service/profile-section/10.png";
import p11 from "../assets/images/our-main-service/profile-section/11.png";

import Breadcrumb from "../components/Breadcrumb";

// ✅ Missing images

// Services data
const services = [
  { id: 1, name: "Slider Door ", image: p1 },
  { id: 2, name: "Bathroom Partitions", image: p2 },
  { id: 3, name: "Open Door ", image: p3 },
  { id: 4, name: "LED Mirrors", image: p4 },
  { id: 5, name: "Office Partitions ", image: p5 },
  { id: 6, name: "Open Shutters", image: p6 },
  { id: 7, name: "Pooja Doors", image: p7 },
  { id: 8, name: "Profile Showcase", image: p8 },
  { id: 9, name: "Sliding Door For Room Entrance", image: p9 },
  { id: 10, name: "Wall Paint", image: p10 },
  { id: 11, name: "Walkin Closet", image: p11 },
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
