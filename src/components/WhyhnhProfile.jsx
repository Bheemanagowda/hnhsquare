import React from "react";

import profileImg from "../assets/images/whyInfo/1.jpg"; // Replace with your actual image
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const WhyhnhProfile = () => {
  return (
    <div className="p-5 why-choose">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="content-box">
              <h5 className="section-title title mb-2">Who We Are</h5>
              <div
                className="underline-wrapper-left"
                style={{ marginBottom: "40px" }}
              >
                <UnderlineOnly className="who-we-are" />
              </div>
              <h3 className="sub-title mb-3">
                <strong>
                  {" "}
                  Leading Manufacturer of Premium Doors, Sliding Doors,
                  Shutters, Partitions, Shower Enclosures & LED Mirrors in
                  Bangalore
                </strong>
              </h3>
              <p className="section-description">
                At HNH SQUARE PROFILE, we take pride in being one of Bangalore’s
                leading manufacturers, offering a wide range of high-quality
                architectural solutions for residential, commercial, and
                industrial spaces. With a strong commitment to craftsmanship,
                innovation, and customer satisfaction, we deliver products that
                combine functionality with style.
              </p>
              <p className="section-description">
                Our extensive product line includes sliding doors, office
                partitions, shower enclosures, LED mirrors, premium doors, and
                customized shutters—all designed to meet the highest standards
                of durability and elegance. Every product we manufacture is a
                result of advanced engineering, precision workmanship, and
                premium-grade materials.
              </p>
              <p className="section-description">
                We understand that every space is unique, which is why we offer
                custom solutions tailored to the specific needs of our clients.
                From compact apartments to large commercial buildings, we bring
                visions to life through efficient design and flawless execution.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6">
            <div className="image-box position-relative">
              <img
                src={profileImg}
                alt="Why HNH"
                className="img-fluid rounded custom-shadow"
              />
              {/* Green corner design */}
              <div className="corner-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyhnhProfile;
