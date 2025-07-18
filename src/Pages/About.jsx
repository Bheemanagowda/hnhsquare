import React from "react";
import AboutUs from "../components/AboutUs";
import WhychooseUs from "../components/WhychooseUs";
import WorkingProcess from "../components/WorkingProcess";
import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg1.webp";
import VisionMission from "../components/VisionMission";

const About = () => {
  return (
    <div>
      <Breadcrumb
        pageTitle="About Us"
        backgroundImage={breadcrumbBg}
        className=""
      />
      <AboutUs showButton={false} />
      <VisionMission />
      <WhychooseUs />
      <WorkingProcess />
    </div>
  );
};

export default About;
