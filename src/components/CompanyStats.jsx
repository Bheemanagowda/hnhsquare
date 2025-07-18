import CountUp from "react-countup";

import "../styles/CompanyStats.css";
import "../styles/space.css";

import experience from "../assets/images/icons/our-achievements/1.png";
import members from "../assets/images/icons/our-achievements/2.png";
import completed from "../assets/images/icons/our-achievements/3.png";
import customers from "../assets/images/icons/our-achievements/4.png";

import bg from "../assets/images/bg/bg-2.webp";
import UnderlineOnly from "./UnderlineOnly";

const statsData = [
  {
    title: "YEARS EXPERIENCE",
    image: experience,
    value: 14,
    suffix: "+",
  },
  {
    title: "TEAM MEMBERS",
    image: members,
    value: 200,
    suffix: "+",
  },
  {
    title: "PROJECTS COMPLETED",
    image: completed,
    value: 250,
    suffix: "+",
  },
  {
    title: "HAPPY CUSTOMERS",
    image: customers,
    value: 250,
    suffix: "+",
  },
];

const CompanyStats = () => {
  return (
    <section
      className="stats-section p-space"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "80px 20px",
      }}
    >
      <div className="container text-center text-white">
        <h2 className="title mb-2 text-white mb-4">
          Our <span className="color-red">Achievements</span>
        </h2>
        <UnderlineOnly className="mb-30 border-color" />

        <div className="row justify-content-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 col-md-3 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 600} // Increased delay per card
            >
              <div className="stats-card p-3 rounded shadow">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "60px" }}
                />
                <h3 className="stats-number">
                  <CountUp end={stat.value} duration={7} />
                  {stat.suffix}
                </h3>
                <p className="stats-label">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
