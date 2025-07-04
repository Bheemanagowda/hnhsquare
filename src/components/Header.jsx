import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

import headerlogo from "../assets/images/logo/hnh.jpg";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setExpanded(false); // Collapse navbar after click
  };

  return (
    <div className="header">
      <Navbar bg="light" expand="lg" className="sticky-top" expanded={expanded}>
        <Container>
          <div className="mobile-header">
            <NavLink to="/home" className="navbar-brand me-2">
              <img src={headerlogo} alt="HNH SQUARE PROFILE" />
            </NavLink>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded((prev) => !prev)}
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ flexWrap: "wrap" }}>
              <NavLink
                to="/home"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                About Us
              </NavLink>

              <NavDropdown
                id="basic-nav-dropdown"
                show={showProducts}
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
                title={
                  <>
                    Products{" "}
                    <FaAngleDown
                      className={`dropdown-icon ${
                        showProducts ? "rotate" : ""
                      }`}
                    />
                  </>
                }
              >
                <NavDropdown.Item
                  onClick={() => handleNavClick("/slider-door")}
                >
                  Slider Doors
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/slider-door")}
                >
                  Bathroom Partitions
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavClick("/open-door")}>
                  Open Door
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/open-shutters")}
                >
                  LED Mirrors
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavClick("/led-mirror")}>
                  Office Partitions
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/profile-partition")}
                >
                  Open Shutters
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/printed-led-wall-frame")}
                >
                  Pooja Doors
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/printed-led-wall-frame")}
                >
                  Profile Showcase
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/printed-led-wall-frame")}
                >
                  Sliding Door For Room Entrance
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/printed-led-wall-frame")}
                >
                  Walk-In Closet
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavClick("/printed-led-wall-frame")}
                >
                  Wardrobe Sliding Doors
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/gallery"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/clients"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Clients
              </NavLink>
              <NavLink
                to="/careers"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Careers
              </NavLink>
              <NavLink
                to="/blogs"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contactus"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
