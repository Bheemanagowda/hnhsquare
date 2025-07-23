import React from "react";
import Slider from "./Slider";
import Button from "./Button";

import "../styles/space.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

// Images
import mainabt from "../assets/images/about/mainabt.jpg";
import slide1 from "../assets/images/about/1.jpg";
import slide2 from "../assets/images/about/2.jpg";
import slide3 from "../assets/images/about/3.jpg";

const aboutImages = [slide1, slide2, slide3];

const AboutUs = ({ showButton = true }) => {
  return (
    <div className="p-space about-us-section">
      <div className="container">
        <div
          className="row align-items-center"
          style={{ marginBottom: "50px" }}
        >
          {/* Right Column - Content */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <div className="abt-info">
              <h2 className="mb-3 mb-2 title">
                Welcome to <span className="color-text">HNH SQUARE </span>
              </h2>
              <p className="mb-3">
                At <strong>HNH SQUARE </strong>, we blend refined aesthetics
                with cutting-edge craftsmanship to redefine modern interiors.
                Specializing in premium profile shutters and sliding systems,
                our solutions are engineered for performance, durability, and
                sleek contemporary living.
              </p>
              <p className="mb-3">
                Our designs go beyond just functionality. With features like
                fluted glass shutters, ambient lighting integration, and
                seamless matte finishes, every installation reflects our
                dedication to visual harmony and spatial efficiency.
              </p>
              <p className="mb-3">
                Whether you're designing a modern kitchen, a high-end wardrobe,
                or a minimalist office setup, our modular systems are crafted to
                deliver elegance, adaptability, and lasting impression.
              </p>
            </div>

            {/* ✅ Conditionally render the Button */}
            {showButton && (
              <a href="/about" style={{ textDecoration: "none" }}>
                <Button
                  text="Read More"
                  className="read-more btn-abt"
                  icon={ArrowRightAltIcon}
                />
              </a>
            )}
          </div>

          {/* Left Column - Image & Slider */}
          <div className="col-12 col-lg-6 mb-4 mb-md-0 position-relative">
            <motion.img
              src={mainabt}
              alt="HNH SQUARE PROFILE"
              loading="lazy"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="img-fluid w-100"
            />

            {/* Absolutely Positioned Slider */}
            <div className="small-slider-container">
              <Slider
                images={aboutImages}
                showPagination={false}
                showNavigation={false}
                imageClassName="about-img"
                className="abt-slider"
                lazyLoad={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
