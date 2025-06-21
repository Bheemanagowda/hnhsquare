import React from "react";

const Button = ({
  text,
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
}) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {iconPosition === "left" && Icon && <Icon className="me-2" />}
      {text}
      {iconPosition === "right" && Icon && <Icon className="ms-2" />}
    </button>
  );
};

export default Button;
