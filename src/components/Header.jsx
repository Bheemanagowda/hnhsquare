import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import headerlogo from "../assets/images/logo/hnh.jpg";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setExpanded(false);
    setShowProductDropdown(false);
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
              className={`nav-item dropdown custom-dropdown ${
                showProductDropdown ? "show" : ""
              }`}
              onMouseEnter={() => !isMobile && setShowProductDropdown(true)}
              onMouseLeave={() => !isMobile && setShowProductDropdown(false)}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() =>
                  isMobile && setShowProductDropdown((prev) => !prev)
                }
              >
                Products <FaAngleDown />
              </span>

              <ul
                className={`dropdown-menu ${showProductDropdown ? "show" : ""}`}
              >
                <li className="dropdown-submenu">
                  <span className="dropdown-item">Interior Design</span>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <span className="dropdown-item">Residential</span>
                      <ul className="dropdown-menu">
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => handleNavigate("/pooja-unit")}
                          >
                            Pooja Unit
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <span className="dropdown-item">Commercial</span>
                      <ul className="dropdown-menu">
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

                <li className="dropdown-submenu">
                  <span className="dropdown-item">Profile Shutters</span>
                  <ul className="dropdown-menu">
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/slider-door")}
                      >
                        Slider Door
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleNavigate("/partition")}
                      >
                        Partition
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/gallery"
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
