import React from "react";
import { Link } from "react-router-dom";
import "../styles/SidebarServices.css";

const defaultServices = [
  { name: "Sliding Door", path: "/products/sliding-door" },
  { name: "Bathroom Partitions", path: "/products/open-door" },
  { name: "LED Mirrors ", path: "/products/open-shutters" },
  { name: "Office Partitions", path: "/products/led-mirror" },
  { name: "Open Shutters", path: "/products/led-mirror" },
  { name: "Pooja Doors", path: "/products/profile-partition" },
  { name: "Profile Doors", path: "/products/printed-led-wall-frame" },
  { name: "Profile Showcases", path: "/products/printed-led-wall-frame" },
  { name: "Walk-in Closet", path: "/products/printed-led-wall-frame" },
  { name: "Wardrobe Sliding Door", path: "/products/printed-led-wall-frame" },
];

const SidebarServices = ({
  activeService,
  services = defaultServices,
  type = "product",
}) => {
  return (
    <div className="p-3 bg-light rounded">
      <h4 className="fw-bold mb-4">
        {type === "blog" ? "Recent Posts" : "Our Products"}
      </h4>
      <hr />
      <ul className="list-unstyled recent-posts-info mb-0">
        {services.map((service, index) => {
          const isActive =
            service.name === activeService || service.title === activeService;

          return (
            <li key={index} className="mb-3">
              <Link
                to={service.path || `/blog/${service.slug}`}
                className={`d-flex ${
                  type === "blog"
                    ? "align-items-start"
                    : "justify-content-between align-items-center"
                } product-name text-decoration-none px-3 py-2 rounded ${
                  isActive ? "text-white active-service" : "hover-bg"
                }`}
              >
                {type === "blog" ? (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="">
                      <div className="fw-semibold">{service.title}</div>
                      <small className="text-muted">{service.date}</small>
                    </div>
                  </>
                ) : (
                  <>
                    <div>{service.name}</div>
                    <span className={isActive ? "" : "text-dark icon-hover"}>
                      &rarr;
                    </span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarServices;
