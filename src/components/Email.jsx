import React from "react";

const companyEmail = "hnhsquare@gmail.com";

const Email = ({ icon, className, title, showSemicolon = false }) => {
  return (
    <div className={`text-center ${className || ""}`}>
      {/* Optional Circle Icon */}
      {icon && (
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <p>{icon}</p>
        </div>
      )}

      {/* Optional Title */}
      {title && <h6 className="mb-3 sub-title">{title}</h6>}

      {/* Email Link */}
      <div className="email fw-semibold">
        {showSemicolon && <span>: </span>}
        <a className={className} href={`mailto:${companyEmail}`}>
          {companyEmail}
        </a>
      </div>
    </div>
  );
};

export default Email;
