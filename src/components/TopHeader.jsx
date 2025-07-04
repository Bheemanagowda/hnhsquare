import React from "react";
import "../styles/TopHeader.css";
import Telephone from "./Telephone";
import Email from "./Email";
import SocialMediaIcons from "./SocialMediaIcons";

// Material UI Icons

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email"; // ✅ Add this

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
              <Telephone showSemicolon={true} />
            </div>
            <div className="email-details">
              <EmailIcon
                style={{ verticalAlign: "middle", marginRight: "5px" }}
              />
              <Email showSemicolon={true} />
            </div>
          </div>
          <div className="right">
            <SocialMediaIcons className="top-header-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
