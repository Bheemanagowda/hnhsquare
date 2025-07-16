import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import InteriorDesign from "../assets/images/our-main-service/interior.jpg";
import ProfileSections from "../assets/images/our-main-service/profile.jpg";
import UnderlineOnly from "./UnderlineOnly";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const services = [
  {
    id: "interior-design",
    image: InteriorDesign,
    title: "Interior Design",
    description:
      "A stylish and spacious walk-in closet with optimized storage solutions.",
  },
  {
    id: "profile-section",
    image: ProfileSections,
    title: "Profile Section",
    description:
      "Sleek and modern profile shutters for a contemporary interior look.",
  },
];

const MainServices = () => {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <section className="p-5" style={{ backgroundColor: "#f3d4d2" }}>
      <div className="container">
        <h2 className="title mb-4 text-center">
          {" "}
          Our <span className="color-text">Main</span> Services
        </h2>
        <UnderlineOnly className="mb-4" />
        <div className="row">
          {services.map((service) => (
            <div className="col-md-6 mb-4" key={service.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title || "Service Image"}
                  className="card-img-top img-fluid"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRedirect(service.id)}
                />
                <div className="card-body text-center">
                  <h3 className="card-title fw-bold">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <Button
                    text="Read More"
                    className="read-more"
                    onClick={() => handleRedirect(service.id)}
                    icon={ArrowRightAltIcon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
