// src/components/ProductSlider.jsx
import React from "react";
import Slider from "./Slider";
import product1 from "../assets/images/about/1.jpg";
import "../styles/ProductSlider.css";
import Button from "../components/Button";
import "../styles/space.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import UnderlineOnly from "./UnderlineOnly";

const products = [
  {
    title: "Sliding Doors",
    content:
      "Sliding doors open horizontally along a smooth track, offering a modern, space-saving solution. Perfect for homes and offices, they provide easy access and a sleek look for patios, wardrobes, and interiors.",
    image: product1,
  },
  {
    title: "Open Door Frame",
    content:
      "An open door frame features a profile without an integral stop or soffit, creating a clean and flat appearance. Commonly used for double-acting doors or doors with rescue hardware, this type of frame offers both functionality and a modern aesthetic.",
    image: product1,
  },
  {
    title: "Open Shutters",
    content:
      "Made from durable aluminum, open profile shutters feature adjustable slats for controlling light and privacy. They offer a sleek look with full open and close functionality, ideal for both homes and commercial spaces.",
    image: product1,
  },
  {
    title: "LED Mirror",
    content:
      "LED mirrors combine style and function, offering bright, even lighting. Perfect for bathrooms and low-light areas, they add a modern, energy-efficient touch to any space — enhancing visibility, elegance, and ambience.",
    image: product1,
  },
  {
    title: "Profile Partition",
    content:
      "Profile partitions are sleek aluminum frameworks used to create fixed or movable divisions. Ideal for separating rooms or defining areas, they offer a modern look and flexible layout for residential and commercial spaces.",
    image: product1,
  },
  {
    title: "Printed LED Wall Frame",
    content:
      "A printed LED wall frame features an aluminum profile with built-in LED strip lights.It combines lighting with customizable graphics for a sleek, modern look.Perfect for branding, décor, or ambient lighting in homes and commercial spaces.",
    image: product1,
  },
];

const ProductSlider = () => {
  return (
    <div className="p-5">
      <div className="container-fluid">
        <h2 className="title text-center mb-2">Our Products</h2>
        <UnderlineOnly className="mb-30" />
        <div className="product-slider-container">
          <Slider
            items={products}
            renderItem={(product, index) => (
              <div className="product-card" key={index}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <h5 className="product-title">{product.title}</h5>
                <p>{product.content}</p>
                <Button
                  text="Read More"
                  className="read-more btn-center "
                  icon={ArrowRightAltIcon}
                />
              </div>
            )}
            slidesPerView={3}
            spaceBetween={30}
            showPagination={false}
            showNavigation={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
