// src/components/ProductSlider.jsx
import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import product1 from "../assets/images/our-products/bathroom-partition.jpg";
import product2 from "../assets/images/our-products/led-mirror.jpg";
import product3 from "../assets/images/our-products/office-partition.jpg";
import product4 from "../assets/images/our-products/open-shutters.jpg";
import product5 from "../assets/images/our-products/pooja-door.jpg";
import product6 from "../assets/images/our-products/profile-door.jpg";
import product7 from "../assets/images/our-products/profile-showcase.jpg";
import product8 from "../assets/images/our-products/sliding-door-for-room-entrance.jpg";
import product9 from "../assets/images/our-products/walkin-closet.jpg";
import product10 from "../assets/images/our-products/wardrobe-sliding-door.jpg";
import "../styles/ProductSlider.css";
import Button from "../components/Button";
import "../styles/space.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import UnderlineOnly from "./UnderlineOnly";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const products = [
  {
    title: "Bathroom Partitions",
    slug: "bathroom-partitions",
    content:
      "Durable, low-maintenance partitions in stainless steel, HPL, and powder-coated metal—ideal for commercial restrooms.",
    image: product1,
  },
  {
    title: "LED Mirrors",
    slug: "led-mirrors",
    content:
      "Sleek, energy-efficient mirrors with built-in lighting—perfect for modern bathrooms and dressing areas.",
    image: product2,
  },
  {
    title: "Office Partitions",
    slug: "office-partitions",
    content:
      "We provide versatile and modern office partitions that create organized, functional workspaces.",
    image: product3,
  },
  {
    title: "Open Shutters",
    slug: "open-shutters",
    content:
      "Sleek and durable open shutters designed for easy access, ventilation, and modern aesthetics.",
    image: product4,
  },
  {
    title: "Pooja Doors",
    slug: "pooja-doors",
    content:
      "Elegant and traditional pooja doors crafted to enhance the spiritual ambiance of your prayer space.",
    image: product5,
  },
  {
    title: "Profile Doors",
    slug: "profile-doors",
    content:
      "Sleek, modern profile doors with aluminum or uPVC frames, offering durability, style, and low maintenance for contemporary interiors.",
    image: product6,
  },
  {
    title: "Profile Showcases",
    slug: "profile-showcases",
    content:
      "Elegant profile showcases made with aluminum or uPVC frames, ideal for stylish displays in homes or commercial.",
    image: product7,
  },
  {
    title: "Sliding Doors",
    slug: "sliding-doors",
    content:
      "Stylish, space-saving sliding doors for modern homes and offices, enhancing light, flow, and accessibility.",
    image: product8,
  },
  {
    title: "Walk-in Closet",
    slug: "walk-in-closet",
    content:
      "Spacious, organized, and stylish walk-in closets designed to maximize storage while enhancing the aesthetics of your room.",
    image: product9,
  },
  {
    title: "Wardrobe Sliding Door",
    slug: "wardrobe-sliding-door",
    content:
      "Sleek and space-saving sliding wardrobe doors for a modern, organized, stylish, and clutter-free look.",
    image: product10,
  },
];

const ProductSlider = () => {
  return (
    <div className="p-space">
      <div className="container-fluid">
        <h2 className="title text-center mb-4">
          Our <span className="color-text">Products</span>
        </h2>
        <UnderlineOnly className="mb-30" />
        <div className="product-slider-container">
          <Slider
            items={products}
            renderItem={(product, index) => (
              <div className="product-card" key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LazyLoadImage
                    src={product.image}
                    alt={product.title}
                    effect="blur"
                    className="product-image"
                  />
                </motion.div>
                <h5 className="product-title">
                  <Link
                    to={`/${product.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {product.title}
                  </Link>
                </h5>
                <p>{product.content}</p>
                <div className="justify-content-center">
                  <Link
                    to={`/${product.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      text="Read More"
                      className="read-more btn-center"
                      icon={ArrowRightAltIcon}
                    />
                  </Link>
                </div>
              </div>
            )}
            slidesPerView={3}
            spaceBetween={30}
            showPagination={false}
            showNavigation={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 3,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
