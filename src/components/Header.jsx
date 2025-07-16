import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import headerlogo from "../assets/images/logo/hnh.jpg";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    products: false,
    interior: false,
    residential: false,
    commercial: false,
    shutters: false,
  });

  const handleNavigate = (path) => {
    navigate(path);
    setExpanded(false);
    setOpenMenus({});
  };

  const toggleMenu = (key, isOpen) => {
    setOpenMenus((prev) => ({ ...prev, [key]: isOpen }));
  };

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" className="sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <img src={headerlogo} alt="HNH SQUARE PROFILE" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded((prev) => !prev)} />
        <Navbar.Collapse>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setExpanded(false)}
              >
                About Us
              </NavLink>
            </li>

            {/* Products Dropdown */}
            <li
              className="nav-item dropdown custom-dropdown"
              onMouseEnter={() => toggleMenu("products", true)}
              onMouseLeave={() => toggleMenu("products", false)}
            >
              <span className="nav-link dropdown-toggle">
                Products{" "}
                <FaAngleDown
                  className={openMenus.products ? "rotate-icon" : ""}
                />
              </span>
              <ul
                className={`dropdown-menu ${openMenus.products ? "show" : ""}`}
              >
                {/* Interior Design */}
                <li
                  className="dropdown-submenu"
                  onMouseEnter={() => toggleMenu("interior", true)}
                  onMouseLeave={() => toggleMenu("interior", false)}
                >
                  <span className="dropdown-item">
                    Interior Design{" "}
                    <FaAngleDown
                      className={openMenus.interior ? "rotate-icon" : ""}
                    />
                  </span>
                  <ul
                    className={`dropdown-menu ${
                      openMenus.interior ? "show" : ""
                    }`}
                  >
                    {/* Residential */}
                    <li
                      className="dropdown-submenu"
                      onMouseEnter={() => toggleMenu("residential", true)}
                      onMouseLeave={() => toggleMenu("residential", false)}
                    >
                      <span className="dropdown-item">
                        Residential Interior Design
                        <FaAngleDown
                          className={openMenus.residential ? "rotate-icon" : ""}
                        />
                      </span>
                      <ul
                        className={`dropdown-menu ${
                          openMenus.residential ? "show" : ""
                        }`}
                      >
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/modular-kitchen")}
                          >
                            Modular Kitchen
                          </span>
                        </li>

                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() =>
                              handleNavigate("/storage-and-wardrobe")
                            }
                          >
                            Storage and Wardrobe
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/crockery-units")}
                          >
                            Crockery Units
                          </span>
                        </li>

                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() =>
                              handleNavigate("/space-saving-furniture")
                            }
                          >
                            Space Saving Furniture
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("tv-units")}
                          >
                            TV Units
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/study-tables")}
                          >
                            Study Tables
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/false-ceiling")}
                          >
                            False Ceiling
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/lights")}
                          >
                            Lights
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/wallpaper")}
                          >
                            Wallpaper
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/wall-paint")}
                          >
                            Wall Paint
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/bathroom")}
                          >
                            Bathroom
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/utility-area")}
                          >
                            Utility Area
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/pooja-unit")}
                          >
                            Pooja Unit
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/foyer-designs")}
                          >
                            Foyer Designs
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/movable-furniture")}
                          >
                            Movable Furniture
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/kids-bedroom")}
                          >
                            Kids Bedroom
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/guest-bedroom")}
                          >
                            Guest Bedroom
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/master-bedroom")}
                          >
                            Master Bedroom
                          </span>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/balcony-design")}
                          >
                            Balcony Design
                          </span>
                        </li>
                      </ul>
                    </li>

                    {/* Commercial */}
                    <li
                      className="dropdown-submenu"
                      onMouseEnter={() => toggleMenu("commercial", true)}
                      onMouseLeave={() => toggleMenu("commercial", false)}
                    >
                      <span className="dropdown-item">
                        Commercial Interior Design
                        <FaAngleDown
                          className={openMenus.commercial ? "rotate-icon" : ""}
                        />
                      </span>
                      <ul
                        className={`dropdown-menu ${
                          openMenus.commercial ? "show" : ""
                        }`}
                      >
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/workstations")}
                          >
                            Workstations
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Profile Shutters */}
                <li
                  className="dropdown-submenu"
                  onMouseEnter={() => toggleMenu("shutters", true)}
                  onMouseLeave={() => toggleMenu("shutters", false)}
                >
                  <span className="dropdown-item">
                    Profile Sections{" "}
                    <FaAngleDown
                      className={openMenus.shutters ? "rotate-icon" : ""}
                    />
                  </span>
                  <ul
                    className={`dropdown-menu ${
                      openMenus.shutters ? "show" : ""
                    }`}
                  >
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("sliding-door")}
                      >
                        Sliding Door
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/bathroom-partitions")}
                      >
                        Bathroom Partitions
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/open-door")}
                      >
                        Open Door
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/led-mirrors")}
                      >
                        LED Mirrors
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/office-partitions")}
                      >
                        Office Partitions
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("open-shutters")}
                      >
                        Open Shutters
                      </span>
                    </li>

                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/profile-showcase")}
                      >
                        Profile Showcase
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() =>
                          handleNavigate("/sliding-door-room-entrance")
                        }
                      >
                        Sliding Door For Room Entrance
                      </span>
                    </li>

                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/walkin-closet")}
                      >
                        Walkin Closet
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Gallery"
                onClick={() => setExpanded(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/careers"
                onClick={() => setExpanded(false)}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blogs"
                onClick={() => setExpanded(false)}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contactus"
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
