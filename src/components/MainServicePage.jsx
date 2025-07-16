import React from "react";
import UnderlineOnly from "./UnderlineOnly";
import Button from "./Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const MainServicePage = ({ image, title, description, services, heading }) => {
  return (
    <div>
      {/* Top Section */}
      <section className="p-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={image}
                alt={title}
                className="w-100 shadow-lg rounded"
              />
            </div>
            <div className="col-md-6">
              <h5 className="title">{title}</h5>
              {Array.isArray(description) ? (
                description.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{description}</p>
              )}
              <Link to="/sliding-door" style={{ textDecoration: "none" }}>
                <Button
                  text="Click More Products"
                  className="read-more"
                  icon={ArrowRightAltIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="p-5 bg-light">
        <div className="container">
          <div className="title text-center mb-4">
            <h2 className="title text-center">{heading}</h2>
          </div>
          <UnderlineOnly className="mb-4" />
          <div className="row">
            {services?.map((item) => (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                  <h6 className="mt-2">{item.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainServicePage;
