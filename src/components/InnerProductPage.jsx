import React from "react";
import Slider from "../components/Slider";

const InnerProductPage = ({
  title,
  description,
  images,
  features,
  subtitle,
  extraTitle,
  extraContent,
}) => {
  return (
    <>
      {/* Slider Section */}
      <section>
        <Slider
          images={images}
          title={title}
          className="product-slider mb-4"
          imageClassName="product-image"
          slidesPerView={1}
          showPagination={true}
          showNavigation={false}
        />
      </section>

      {/* Product Details Section */}
      <section className="product-details">
        <div className="container">
          <h2 className="title">{title}</h2>
          <hr />
          <p className="description">{description}</p>

          {/* Features List */}
          {features && features.length > 0 && (
            <>
              {subtitle && <h3 className="mt-4 mb-3">{subtitle}</h3>}
              <ul className="features ps-3">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {/* Optional Extra Section */}
          {extraTitle && extraContent && (
            <div className="mt-5">
              <h3 className="mb-3">{extraTitle}</h3>
              <p>{extraContent}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default InnerProductPage;
