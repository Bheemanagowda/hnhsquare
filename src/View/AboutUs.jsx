import React from "react";
import Slider from "../components/Slider";
import Button from "../components/Button";
import "../styles/style.css";
import "../styles/space.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Images
import mainabt from "../assets/images/about/mainabt.jpg";
import slide1 from "../assets/images/about/1.jpg";
import slide2 from "../assets/images/about/2.jpg";
import slide3 from "../assets/images/about/3.jpg";

const aboutImages = [slide1, slide2, slide3];

const AboutUs = () => {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Left Column with image and slider positioned absolutely */}

        {/* Right Column - Content */}
        <div className="col-md-6">
          <div className="abt-info">
            <h2 className="mb-3 mb-2 title">
              Welcome to <span className="color-text">HNH SQUARE PROFILE</span>
            </h2>
            <p className="mb-3">
              At <strong>HNH SQUARE PROFILE</strong>, we blend refined
              aesthetics with cutting-edge craftsmanship to redefine modern
              interiors. Specializing in premium profile shutters and sliding
              systems, our solutions are engineered for performance, durability,
              and sleek contemporary living.
            </p>
            <p className="mb-3">
              Our designs go beyond just functionality. With features like
              fluted glass shutters, ambient lighting integration, and seamless
              matte finishes, every installation reflects our dedication to
              visual harmony and spatial efficiency.
            </p>
            <p className="mb-3">
              Whether you're designing a modern kitchen, a high-end wardrobe, or
              a minimalist office setup, our modular systems are crafted to
              deliver elegance, adaptability, and lasting impression.
            </p>
          </div>
          <Button
            text="Read More"
            className="read-more"
            icon={ArrowRightAltIcon}
          />
        </div>
        <div className="col-md-6 mb-4 mb-md-0 position-relative">
          <img
            src={mainabt}
            alt="Kitchen Design"
            className="img-fluid rounded-4 shadow-sm abtImg"
          />

          {/* Absolutely Positioned Slider */}
          <div className="small-slider-container">
            <Slider
              images={aboutImages}
              showPagination={false}
              showNavigation={false}
              imageClassName="about-img" // Your custom class
              className="abt-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
