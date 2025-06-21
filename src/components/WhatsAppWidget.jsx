import React from "react";
import wpIcon from "../assets/images/whatsapp-png-logo-7.png";
import wpSmall from "../assets/images/wp.png";
import "../styles/WhatsAppWidget.css";

const WhatsAppWidget = () => {
  return (
    <>
      {/* Desktop floating WhatsApp */}
      <div
        className="wp wp2"
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "70%",
          right: "2%",
          zIndex: 9999,
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=919886540411&text=Hi%20Sir,%20Please%20share%20me%20more%20details"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wpIcon} alt="WhatsApp" style={{ width: 55, height: 55 }} />
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="mobile-icons" style={{ zIndex: 9999, paddingTop: 5 }}>
        <div>
          <a href="tel:+919742545784">
            <i
              className="my-icon icon-call-solid"
              style={{ fontSize: 25, color: "#fff" }}
            ></i>
            <p style={{ color: "#fff" }}>CALL NOW</p>
          </a>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=919886540411&text=Interested%20in%20Share%20More%20Details"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wpSmall} alt="WhatsApp" style={{ width: "30%" }} />
            <p style={{ color: "#fff" }}>WHATSAPP</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
