import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/Footer.css";
import footerlogo from "../assets/images/logo/footer.jpg";
import footerBg from "../assets/images/bg/footer-bg.jpg";
import qrcode from "../assets/images/qrcode/qrcode.png";
import "../styles/space.css";
import Telephone from "./Telephone";
import Email from "./Email";
import UnderlineOnly from "./UnderlineOnly";

// Import your background image
// Assuming the path to your background image

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white pt-5 "
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row pb-5">
          {/* Logo and About */}
          <div className="col-md-3 mb-4">
            <div className="footer-logo">
              <img src={footerlogo} alt="HNH SQUARE PROFILE" className="mb-3" />
            </div>
            {/* <p className="footer-para">
              At HNH SQUARE PROFILE, we blend refined aesthetics with
              cutting-edge craftsmanship to redefine modern interiors.
            </p> */}
            <div className="d-flex gap-2 mt-3">
              <div className="bg-secondary p-3 ">
                <FaFacebookF />
              </div>
              <div className="bg-secondary p-3 ">
                <FaInstagram />
              </div>
              <div className="bg-secondary p-3 ">
                <FaTwitter />
              </div>
              <div className="bg-secondary p-3 ">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3 footer-title mb-2">Quick Links</h5>
            <div className="underline-wrapper-left">
              <UnderlineOnly className="footer-underline mb-4" />
            </div>
            <ul className="list-unstyled quick-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="mb-3 footer-title mb-2">Qr Code</h5>
            <div className="underline-wrapper-left">
              <UnderlineOnly className="footer-underline mb-4" />
            </div>
            <div className="qrcode">
              {/* Ensure this path is correct if qr-code.png is not in the public folder */}
              <img src={qrcode} alt="HNH SQUARE PROFILE" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-2 footer-title ">Contact Us</h5>
            <div className="underline-wrapper-left">
              <UnderlineOnly className="footer-underline border-color mb-4" />
            </div>
            <div className="d-flex align-items-start mb-2 contact-text">
              <FaMapMarkerAlt
                className="me-2  icon"
                style={{ width: "40px" }}
              />

              <p>
                : No.85, Near Anjeeneya Temple, 11th Cross, Gangonallhi, Near
                Vijaynagar, Mysore Road, Bangalore, Karnataka 560039
              </p>
            </div>
            <div className="d-flex align-items-center mb-2  contact-text">
              <FaPhoneAlt className="me-2 icon" />
              <p>
                <Telephone />
              </p>
            </div>
            <div className="d-flex align-items-center  contact-text">
              <FaEnvelope className="me-2 icon" />
              <p>
                <Email />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 copyright-bg ">
        <p>
          © 2025 <strong>HNH SQUARE PROFILE</strong>, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
