import React from "react";
import {
  Construction, // Quality Materials
  DesignServices, // Custom Designs
  Groups, // Expert Team
  LocalShipping, // On-Time Delivery
  AttachMoney, // Affordable Pricing
  EmojiEmotions, // Customer Satisfaction
} from "@mui/icons-material";
import "../styles/style.css";
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const features = [
  {
    title: "Quality Materials",
    icon: <Construction className="icon-size" color="primary" />,
  },
  {
    title: "Custom Designs",
    icon: <DesignServices className="icon-size" color="primary" />,
  },
  {
    title: "Expert Team",
    icon: <Groups className="icon-size" color="primary" />,
  },
  {
    title: "On-Time Delivery",
    icon: <LocalShipping className="icon-size" color="primary" />,
  },
  {
    title: "Affordable Pricing",
    icon: <AttachMoney className="icon-size" color="primary" />,
  },
  {
    title: "Customer Satisfaction",
    icon: <EmojiEmotions className="icon-size" color="primary" />,
  },
];

const WhychooseUs = () => {
  return (
    <div className="why-choose p-5">
      <div className="container ">
        <h2 className="text-center mb-2">Why Choose Us</h2>
        <UnderlineOnly className="mb-30" />
        <div className="row">
          {features.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 shadow  text-center h-100 whychoose-card">
                <div className="mb-3 icon-size">{item.icon}</div>
                <h5 className="whychoose-sub-title">{item.title}</h5>
                <p>
                  We ensure top-notch quality and personalized service to meet
                  your architectural needs with precision and style.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhychooseUs;
