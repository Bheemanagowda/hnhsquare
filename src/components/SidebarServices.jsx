import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SidebarServices.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categorizedServices = [
  {
    title: "Interior Design",
    items: [
      { name: "Modular Kitchen", path: "/modular-kitchen" },
      { name: "Storage And Wardrobe", path: "/storage-and-wardrobe" },

      { name: "Space Saving Furniture", path: "/space-saving-furniture" },
      { name: "TV Units", path: "/tv-units" },
      { name: "Study Tables", path: "/study-tables" },
      { name: "False Ceiling", path: "/false-ceiling" },
      { name: "Crockery Units", path: "/crockery-units" },
      { name: "Lights", path: "/lights" },
      { name: "Wallpaper", path: "/wallpaper" },
      { name: "Wall Paint", path: "/wall-paint" },
      { name: "Bathroom", path: "/bathroom" },
      { name: "Pooja Unit", path: "/pooja-unit" },
      { name: "Foyer Designs", path: "/foyer-designs" },
      { name: "Utility Area", path: "/utility-area" },
      { name: "Movable Furniture", path: "/movable-furniture" },
      { name: "Kids Bedroom", path: "/kids-bedroom" },
      { name: "Guest Bedroom", path: "/guest-bedroom" },
      { name: "Master Bedroom", path: "/master-bedroom" },
      { name: "Balcony Design", path: "/balcony-design" },
    ],
  },
  {
    title: "Profile Section",
    items: [
      { name: "Sliding Door", path: "/sliding-door" },
      { name: "Bathroom Partitions", path: "/bathroom-partitions" },
      { name: "Open Door", path: "/open-door" },
      { name: "LED Mirrors", path: "/led-mirrors" },
      { name: "Profile Showcase", path: "/profile-showcase" }, // Keep only one
      { name: "Pooja Doors", path: "/pooja-doors" },
      { name: "Profile Doors", path: "/profile-doors" },
      { name: "Office Partitions", path: "/office-partitions" },
      { name: "Open Shutters", path: "/open-shutters" },
      { name: "Walk-in Closet", path: "/walkin-closet" },
    ],
  },
];

const SidebarServices = ({
  activeService,
  services = [],
  type = "product",
}) => {
  const [activeCategory, setActiveCategory] = useState(() => {
    const category = categorizedServices.find((cat) =>
      cat.items.some(
        (item) =>
          item.name.trim().toLowerCase() ===
          (activeService || "").trim().toLowerCase()
      )
    );
    return category?.title || null;
  });

  if (type === "blog") {
    return (
      <div className="p-3 bg-light rounded">
        <h4 className="fw-bold mb-4">Recent Posts</h4>
        <hr />
        <ul className="list-unstyled recent-posts-info mb-0">
          {services.map((service, index) => {
            const isActive = service.title === activeService;
            return (
              <li key={index} className="mb-3">
                <Link
                  to={`/blog/${service.slug}`}
                  className={`d-flex align-items-start text-decoration-none px-3 py-2 rounded ${
                    isActive ? "text-white active-service" : "hover-bg"
                  }`}
                >
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
                  <div>
                    <div className="recent-post-titel">{service.title}</div>
                    <small className="text-muted">{service.date}</small>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-3 bg-light rounded">
      <h4 className="fw-bold mb-4">Our Products</h4>
      <hr />

      {categorizedServices.map((category, catIndex) => {
        const isActive = activeCategory === category.title;

        return (
          <div key={catIndex}>
            <button
              className={`btn btn-sm d-flex justify-content-between align-items-center w-100 mb-2 ${
                isActive ? "bg-dark text-white" : "btn-outline-danger"
              }`}
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === category.title ? null : category.title
                )
              }
            >
              <h4>{category.title}</h4>
              {isActive ? (
                <ExpandLessIcon fontSize="large" />
              ) : (
                <ExpandMoreIcon fontSize="large" />
              )}
            </button>

            {isActive && (
              <ul className="list-unstyled recent-posts-info mb-3">
                {category.items.map((item, index) => {
                  const isItemActive = item.name === activeService;
                  return (
                    <li key={index} className="mb-2">
                      <Link
                        to={item.path}
                        className={`d-flex justify-content-between align-items-center product-name text-decoration-none px-3 py-2 rounded ${
                          isItemActive
                            ? "text-danger active-service"
                            : "hover-bg"
                        }`}
                      >
                        <div>{item.name}</div>
                        <span
                          className={isItemActive ? "" : "text-dark icon-hover"}
                        >
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarServices;
