import React from "react";
import "../styles/UnderlineOnly.css";

const UnderlineOnly = ({ className = "" }) => {
  return <div className={`underline-only ${className}`}></div>;
};

export default UnderlineOnly;
