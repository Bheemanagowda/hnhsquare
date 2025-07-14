import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import headerlogo from "../assets/images/logo/hnh.jpg";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setExpanded(false);
    setProductOpen(false);
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
                productOpen ? "show" : ""
              }`}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <span
                className="nav-link dropdown-toggle d-flex justify-content-between align-items-center"
                onClick={() => setProductOpen(!productOpen)}
              >
                Products <FaAngleDown />
              </span>

              <ul className={`dropdown-menu ${productOpen ? "show" : ""}`}>
                <li className="dropdown-submenu">
                  <span className="dropdown-item d-flex justify-content-between align-items-center">
                    Interior Design <FaAngleDown />
                  </span>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <span className="dropdown-item d-flex justify-content-between align-items-center">
                        Residential <FaAngleDown />
                      </span>
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
                      <span className="dropdown-item d-flex justify-content-between align-items-center">
                        Commercial <FaAngleDown />
                      </span>
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
                  <span className="dropdown-item d-flex justify-content-between align-items-center">
                    Profile Shutters <FaAngleDown />
                  </span>
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

            {/* Gallery */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Gallery"
                onClick={() => setExpanded(false)}
              >
                Gallery
              </NavLink>
            </li>

            {/* Careers */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/careers"
                onClick={() => setExpanded(false)}
              >
                Careers
              </NavLink>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blogs"
                onClick={() => setExpanded(false)}
              >
                Blog
              </NavLink>
            </li>

            {/* Contact Us */}
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
