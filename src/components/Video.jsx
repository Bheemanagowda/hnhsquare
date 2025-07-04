// src/components/Video.jsx
import React from "react";
import "../styles/Video.css";
import videoFile from "../assets/images/videos/hnh-video.mp4";
import UnderlineOnly from "./UnderlineOnly";

const Video = () => {
  return (
    <div className="p-space video-section">
      <div className="container ">
        <h2 className="title text-center text-white mb-4">
          THE NEW DESIGN ERA
        </h2>
        <UnderlineOnly className="mb-30 .who-we-are border-color" />
        <div className="video-content">
          <h4 className="design-para text-white text-center mb-5">
            HNH Square Profile introduces a bold evolution in modern interiors –
            setting new standards in style, strength, and seamless elegance.
          </h4>
        </div>
        <div className="video-wrapper " width="100%" title="HNH SQAURE PROFILE">
          <div className="responsive-video">
            <video
              controls
              width="100%"
              title="HNH SQAURE PROFILE"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
