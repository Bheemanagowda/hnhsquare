import { PhoneCall, Mail, User, MessageSquareText } from "lucide-react";
import "../styles/ContactUs.css";
import Button from "../components/Button";
import MapEmbed from "../components/MapEmbed";
import ContactForm from "../components/ContactForm";
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const ContactUs = () => {
  return (
    <div className="p-space contact-bg">
      <div className="container">
        {/* Title */}
        <h2 className="text-center title mb-4">
          Contact <span className="color-text">Us</span>
        </h2>
        <UnderlineOnly className="mb-30" />

        <div className="row">
          {/* Form Column */}
          <div
            className="col-md-6 mb-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <ContactForm className="mb-4" />
          </div>

          {/* Map Column */}
          <div
            className="col-md-6 mb-4"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <MapEmbed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
