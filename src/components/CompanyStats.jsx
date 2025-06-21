// src/components/CompanyStats.jsx
import React from "react";
import CountUp from "react-countup";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "../styles/CompanyStats.css";
import bg from "../assets/images/bg/1.jpg";
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const statsData = [
  {
    title: "HUNDREDS OF PROJECTS",
    icon: <EngineeringIcon className="icon" />,
    value: 99,
    suffix: "+",
  },
  {
    title: "OVER TEN YEARS",
    icon: <ConstructionIcon className="icon" />,
    value: 25,
    suffix: "+",
  },
  {
    title: "CLIENTS SERVED GLOBALLY",
    icon: <PublicIcon className="icon" />,
    value: 35,
    suffix: "+",
  },
  {
    title: "TRUSTED BY MANY CLIENTS",
    icon: <ThumbUpIcon className="icon" />,
    value: 60,
    suffix: "+",
  },
];

const CompanyStats = () => {
  return (
    <section
      className="stats-section p-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "80px 20px",
      }}
    >
      <h2 className="stats-title mb-2">Our Achievements</h2> {/* Title added */}
      <UnderlineOnly className="mb-30 .who-we-are border-color" />
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-card">
            {stat.icon}
            <h3 className="stats-number">
              <CountUp end={stat.value} duration={2} />
              {stat.suffix}
            </h3>
            <p className="stats-label">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
