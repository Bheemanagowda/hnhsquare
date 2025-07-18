import React from "react";
import { FaEye, FaBullseye, FaHeart } from "react-icons/fa";

import "../styles/VisionMission.css";
import bg from "../assets/images/bg/innerbg2.webp";
import UnderlineOnly from "../components/UnderlineOnly";
import vision from "../assets/images/icons/abt-us/vision.png";
import values from "../assets/images/icons/abt-us/valuse.png";
import mission from "../assets/images/icons/abt-us/mission.png";

const visionData = [
  {
    image: vision,
    title: "Our Vision",
    text: "To become a leading brand in delivering innovative and aesthetic interior solutions using slider doors, profile shutters, LED mirrors, and partition frames.",
  },
  {
    image: values,
    title: "Our Values",
    text: "We are committed to Customer Satisfaction, Creative Innovation, Quality & Reliability, Integrity & Commitment, and Timely Delivery in every project we undertake.",
  },
  {
    image: mission,
    title: "Our Mission",
    text: "To design and deliver stylish, durable, and functional interior products that elevate both residential and commercial spaces with modern aesthetics.",
  },
];

const VisionMission = () => {
  return (
    <section
      className="vision-mission-section py-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h2 className="text-center title mb-4 text-white ">
          Our Vision, Values & Mission
        </h2>
        <UnderlineOnly className="mb-4 border-color" />

        <div className="row text-center">
          {visionData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className=" shadow-lg vm-box text-white  border p-4 mb-4 rounded  ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h4 className="mb-4">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
