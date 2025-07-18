import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";
import footerlogo from "../assets/images/logo/footer.jpg";
import footerBg from "../assets/images/bg/footer-bg.jpg";
import qrcode from "../assets/images/qrcode/qrcode.png";

import "../styles/space.css";

import Telephone from "./Telephone";
import Email from "./Email";
import UnderlineOnly from "./UnderlineOnly";
import SocialMediaIcons from "./SocialMediaIcons";
import CompanyLocations from "./CompanyLocations";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white pt-5"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row pb-5">
          {/* Logo and About */}
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="footer-logo">
              <img src={footerlogo} alt="HNH SQUARE PROFILE" className="mb-3" />
            </div>
            <div className="d-flex gap-2 mt-3">
              <SocialMediaIcons className="footer-social-icons" />
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-2 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h5 className="mb-3 footer-title mb-4">Quick Links</h5>
            <div className="underline-wrapper-left">
              <UnderlineOnly className="footer-underline mb-4" />
            </div>
            <ul className="list-unstyled quick-links">
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/home">Home</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/about">About Us</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="">Products</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/clients">Clients</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/careers">Careers</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h5 className="mb-3 footer-title mb-4">Qr Code</h5>
            <div className="underline-wrapper-left">
              <UnderlineOnly className="footer-underline mb-4" />
            </div>
            <div className="qrcode">
              <img src={qrcode} alt="HNH SQUARE PROFILE" />
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h5 className="mb-4 footer-title">Contact Us</h5>
            <div className="underline-wrapper-left">
              <UnderlineOnly className="footer-underline border-color mb-4" />
            </div>
            <div className="d-flex align-items-start contact-text">
              <FaMapMarkerAlt className="me-2 icon" style={{ width: "40px" }} />
              <CompanyLocations
                locationClass="text-start"
                showSemicolon={true}
              />
            </div>
            <div className="d-flex align-items-center contact-text">
              <FaPhoneAlt className="me-2 icon" />

              <Telephone showSemicolon={true} />
            </div>
            <div className="d-flex align-items-center contact-text">
              <FaEnvelope className="me-2 icon" />

              <Email showSemicolon={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 copyright-bg">
        <p>
          © 2025 <strong>HNH SQUARE PROFILE</strong>, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
