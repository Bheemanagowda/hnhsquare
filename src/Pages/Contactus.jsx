import React from "react";
import Telephone from "../components/Telephone";
import Email from "../components/Email";
import CompanyLocations from "../components/CompanyLocations";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactForm from "../components/ContactForm"; // ✅ Import the ContactForm component
import "./ContactUs.css";
import MapEmbed from "../components/MapEmbed";
import Breadcrumb from "../components/Breadcrumb";
import Underline from "../components/UnderlineOnly";
import breadcrumbBg from "../assets/images/bg/innerbg1.webp";

const ContactUs = () => {
  return (
    <div>
      <Breadcrumb
        pageTitle="Contact Us"
        backgroundImage={breadcrumbBg}
        className=""
      />
      <div className="container p-space">
        <h2 className="mb-4 text-center title">
          {" "}
          We're <span className="color-text">Here to </span>
          Help
        </h2>
        <Underline className="mb-4" />

        <div className="row g-4">
          {/* Left Column: Contact Info */}
          <div className="col-md-4">
            {/* Phone Card */}
            <div className="card card-hover shadow-sm p-3 mb-4">
              <div className="card-body text-center">
                <Telephone
                  title="Phone Number"
                  icon={
                    <PhoneIcon style={{ color: "#b21001", fontSize: "40px" }} />
                  }
                  className="contact-details   "
                />
              </div>
            </div>

            {/* Email Card */}
            <div className="card card-hover shadow-sm p-3 mb-4">
              <div className="card-body text-center">
                <Email
                  title="Email"
                  icon={
                    <EmailIcon style={{ color: "#b21001", fontSize: "40px" }} />
                  }
                  className="contact-details"
                />
              </div>
            </div>

            {/* Location Card */}
            <div className="card card-hover shadow-sm p-3">
              <div className="card-body ">
                <CompanyLocations
                  title="Office Address"
                  icon={
                    <LocationOnIcon
                      style={{ color: "#b21001", fontSize: "40px" }}
                    />
                  }
                  className="contact-details "
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-md-8">
            <ContactForm className="mb-4" />{" "}
            {/* ✅ Using the reusable form with validation */}
            <MapEmbed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
