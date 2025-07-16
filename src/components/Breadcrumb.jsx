import React from "react";
import "../styles/Breadcrumb.css";

const Breadcrumb = ({
  pageTitle,
  backgroundImage,
  showPageTitle = true,
  blogTitle,
  category,
  productName,
}) => {
  const breadcrumbStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="breadcrumb-container" style={breadcrumbStyle}>
      <nav aria-label="breadcrumb">
        {showPageTitle && <h1 className="text-center mb-4">{pageTitle}</h1>}
        {blogTitle && (
          <h2 className="text-center blog-title mb-3">{blogTitle}</h2>
        )}

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/products">Products</a>
          </li>
          {category && (
            <li className="breadcrumb-item">
              <span>{category}</span>
            </li>
          )}
          {productName && (
            <li className="breadcrumb-item active" aria-current="page">
              {productName}
            </li>
          )}
          {!productName && !category && (
            <li className="breadcrumb-item active" aria-current="page">
              {pageTitle}
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
