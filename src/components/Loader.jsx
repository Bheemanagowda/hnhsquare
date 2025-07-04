import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h4>
        <strong>
          {" "}
          HNH <span style={{ color: "#b21001" }}>SQUARE </span>
          PROFILE
        </strong>
      </h4>
    </div>
  );
};

export default Loader;
