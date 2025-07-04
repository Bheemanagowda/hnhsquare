import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import profileImg from "../assets/images/whyInfo/1.jpg";
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const WhyhnhProfile = () => {
  return (
    <div className="p-space why-choose">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse">
          {/* Left Side - Image */}
          <div className=" col-12 col-lg-6  mb-4 mb-md-0" data-aos="fade-left">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="image-box position-relative"
            >
              <LazyLoadImage
                src={profileImg}
                alt="Why HNH"
                className="img-fluid rounded custom-shadow"
                effect="blur"
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="col-12 col-lg-6 " data-aos="fade-right">
            <div className="content-box we-are">
              <h5 className="section-title title mb-4">
                Who <span className="color-text">We</span> Are
              </h5>
              <div className="underline-wrapper-left mb-4">
                <UnderlineOnly className="who-we-are" />
              </div>
              <h3 className="sub-title mb-3">
                <strong>
                  Leading Manufacturer of Premium Doors, Sliding Doors,
                  Shutters, Partitions, Shower Enclosures & LED Mirrors in
                  Bangalore
                </strong>
              </h3>
              <p className="section-description">
                At HNH SQUARE PROFILE, we take pride in being one of Bangalore’s
                leading manufacturers, offering a wide range of high-quality
                architectural solutions for residential, commercial, and
                industrial spaces.
              </p>
              <p className="section-description">
                Our extensive product line includes sliding doors, office
                partitions, shower enclosures, LED mirrors, premium doors, and
                customized shutters—all designed for durability and elegance.
              </p>
              <p className="section-description">
                We understand every space is unique, which is why we offer
                tailored solutions—from compact apartments to large commercial
                buildings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyhnhProfile;
