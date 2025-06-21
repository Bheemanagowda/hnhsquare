import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import "../styles/Responsive.css";
import headerlogo from "../assets/images/logo/hnh.jpg";

const Header = () => {
  return (
    <div className="header ">
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container>
          {/* Logo & Toggle in small-width div */}
          <div className="mobile-header">
            <Navbar.Brand href="#home" className="me-2">
              <img src={headerlogo} alt="HNH SQUARE PROFILE " />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          {/* Menu occupies remaining space */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ flexWrap: "wrap" }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>

              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1.1">
                  Wardrobes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/1.2">TV Units</NavDropdown.Item>

                {/* Nested Dropdown */}
                <NavDropdown
                  title="Modular Kitchen"
                  id="nested-dropdown"
                  className="dropdown-submenu"
                >
                  <NavDropdown.Item href="#action/1.3.1">
                    L-Shaped
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3.2">
                    U-Shaped
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3.3">
                    Parallel
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/1.4">More...</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#clients">Clients</Nav.Link>
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
