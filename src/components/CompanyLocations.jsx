import React from "react";

const CompanyLocations = ({ icon, title, className, locationClass }) => {
  return (
    <div className={`text-center ${className || ""}`}>
      {/* Icon */}
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
      {title && <h6 className="mb-3 sub-title">{title}</h6>}

      {/* Locations */}
      <div className={`company-locations ${locationClass || ""}`}>
        <div className="location-card">
          <h5 className={className}>
            <b>HNH SQUARE PROFILE</b>
          </h5>
          <p>
            29/3, New Bank Colony, Amruthnagar Main Road, Konanakunte, Bangalore
            - 560062
          </p>
        </div>

        <div className="location-card">
          <h5 className={className}>
            <b>HNH SQUARE INTERIORS</b>
          </h5>
          <p>
            No.5, Basappa Reddy Compound, Near Venkateshwara Temple, Y V Annaiah
            Road, Kanakapura Main Road, Yelachenahalli - 560078
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyLocations;
