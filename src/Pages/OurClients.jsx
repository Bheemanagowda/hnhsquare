import React from "react";
import "../styles/ClientsLogo.css"; // Optional styling
import "../styles/space.css";
import UnderlineOnly from "../components/UnderlineOnly";

// Import client logos
import clientLogo1 from "../assets/images/vendors/1.jpg";
import clientLogo2 from "../assets/images/vendors/2.jpg";
import clientLogo3 from "../assets/images/vendors/3.jpg";
import clientLogo4 from "../assets/images/vendors/4.jpg";
import clientLogo5 from "../assets/images/vendors/5.jpg";
import clientLogo6 from "../assets/images/vendors/6.jpg";
import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg1.jpg";

const clientLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
];

const OurClients = () => {
  return (
    <div>
      <Breadcrumb
        pageTitle="Clients"
        backgroundImage={breadcrumbBg}
        className=""
      />

      <section className="our-clients-section py-5">
        <div className="container">
          <h2 className="text-center title mb-4">
            Our <span className="color-text">Clients</span>
          </h2>
          <UnderlineOnly className="mb-4" />

          <div className="row justify-content-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="col-6 col-md-3 col-lg-4 mb-4 d-flex align-items-center justify-content-center"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="img-fluid shadow"
                  style={{
                    maxHeight: "100%",
                    objectFit: "contain",
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid gray",
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
