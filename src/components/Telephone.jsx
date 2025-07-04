import React from "react";
import "../styles/Telephone.css";

const phoneNumbers = [
  { number: "+91 9886540411", label: "Customer Care" },
  { number: "08026322085", label: "Support" },
];

const Telephone = ({ icon, title, className = "", showSemicolon = false }) => {
  return (
    <div className="text-center">
      {/* Circle Icon */}
      {icon && (
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f0f0f0",
          }}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      {title && <h6 className="mb-2 sub-title mb-3">{title}</h6>}

      {/* Phone Numbers */}
      <div className="phone-numbers fw-semibold">
        {phoneNumbers.map((item, index) => (
          <React.Fragment key={index}>
            {index === 0 && showSemicolon && <span>: </span>}
            <a className={className} href={`tel:${item.number}`}>
              {item.number}
            </a>
            {index < phoneNumbers.length - 1 && <span> / </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Telephone;
