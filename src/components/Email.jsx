import React from "react";

import "../styles/style.css";
const companyEmail = "hnhsquare@gmail.com";

const Email = () => {
  return (
    <div className="email">
      : <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
    </div>
  );
};

export default Email;
