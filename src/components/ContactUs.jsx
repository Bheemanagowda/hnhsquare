import { MapPin, PhoneCall, Mail, User, MessageSquareText } from "lucide-react";
import "../styles/ContactUs.css";
import Button from "../components/Button";
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const ContactUs = () => {
  return (
    <div className="p-5 contact-bg">
      <div className="container ">
        {/* Combined Title */}
        <h2 className="text-center title mb-2">Contact Us</h2>
        <UnderlineOnly className="mb-30" />

        <div className="row">
          {/* Form Column */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-4 border border-primary h-100">
              <form>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <User />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <Mail />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <PhoneCall />
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <MessageSquareText />
                  </span>
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="submit-btn">
                  {" "}
                  <Button text="Submit Now" className="submit-button" />
                </div>
              </form>
            </div>
          </div>

          {/* Map Column */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border border-secondary h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4311687512495!2d77.56502697575472!3d12.879973416879116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1553f5804715%3A0x50a13c66f15888bc!2s29%2C%20Subbanna%20Layout%2C%20New%20Bank%20Colony%2C%20Chunchankatte%2C%20Konanakunte%2C%20Bengaluru%2C%20Karnataka%20560062!5e0!3m2!1sen!2sin!4v1750422895822!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </div>

        {/* Optional: Scroll to Top Button */}
        {/* Uncomment below if needed */}
        {/* {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            padding: "10px 15px",
            fontSize: "18px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            zIndex: 999,
          }}
        >
          ↑
        </button>
      )} */}
      </div>
    </div>
  );
};

export default ContactUs;
