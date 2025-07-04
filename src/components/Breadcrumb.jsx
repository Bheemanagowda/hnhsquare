import React from "react";
import "../styles/Breadcrumb.css";

const Breadcrumb = ({ pageTitle, backgroundImage }) => {
  const breadcrumbStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="breadcrumb-container" style={breadcrumbStyle}>
      <nav aria-label="breadcrumb">
        <h1 className="text-center mb-4">{pageTitle} </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
