import React from "react";

const Collections = ({ images, columnClass }) => {
  return (
    <div className="row">
      {images.map((item) => (
        <div key={item.id} className={columnClass}>
          <div className="gallery-image-container">
            <img
              src={item.image}
              alt={`Gallery item ${item.id}`}
              className="img-fluid w-100 h-auto"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
