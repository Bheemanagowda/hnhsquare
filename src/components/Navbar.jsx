import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import "../styles/Navbar.css"; // your CSS file

const Navbar = () => {
  useEffect(() => {
    const submenuItems = document.querySelectorAll(
      ".dropdown-submenu > .dropdown-item"
    );

    const handleClick = (e) => {
      const submenu = e.currentTarget.nextElementSibling;

      // Close other submenus
      document
        .querySelectorAll(".dropdown-submenu .dropdown-menu")
        .forEach((el) => {
          if (el !== submenu) el.classList.remove("show");
        });

      if (submenu) submenu.classList.toggle("show");
      e.preventDefault();
      e.stopPropagation();
    };

    submenuItems.forEach((el) => el.addEventListener("click", handleClick));
    return () =>
      submenuItems.forEach((el) =>
        el.removeEventListener("click", handleClick)
      );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container">
        <a className="navbar-brand" href="/">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown custom-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                data-bs-toggle="dropdown"
              >
                Products <FaAngleDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" href="#!">
                    Playground Equipment
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Slides
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Swings
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item" href="#!">
                    Gym Equipment
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Treadmills
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Multi-gyms
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
