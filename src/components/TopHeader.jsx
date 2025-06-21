import React from "react";
import "../styles/TopHeader.css";
import Telephone from "./Telephone";
import Email from "./Email";

// Material UI Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email"; // ✅ Add this

const socialLinks = [
  { icon: <InstagramIcon />, url: "#", label: "Instagram" },
  { icon: <FacebookIcon />, url: "#", label: "Facebook" },
  { icon: <YouTubeIcon />, url: "#", label: "YouTube" },
  { icon: <LinkedInIcon />, url: "#", label: "LinkedIn" },
  { icon: <TwitterIcon />, url: "#", label: "Twitter" },
];

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="social-media">
          <div className="left">
            <div className="phone-numbers">
              <PhoneIcon
                style={{ verticalAlign: "middle", marginRight: "5px" }}
              />
              <Telephone />
            </div>
            <div className="email-details">
              <EmailIcon
                style={{ verticalAlign: "middle", marginRight: "5px" }}
              />
              <Email />
            </div>
          </div>
          <div className="right">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{ color: "white", marginLeft: "15px" }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
