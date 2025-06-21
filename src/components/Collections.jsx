import React from "react";
import "../styles/Gallery.css";
// Import images
import shutters1 from "../assets/images/gallery/1.jpg";
import doors from "../assets/images/gallery/2.jpg";
import sliding from "../assets/images/gallery/3.jpg";
import sliding1 from "../assets/images/gallery/4.jpg";
import doors1 from "../assets/images/gallery/5.jpg";
import shutters2 from "../assets/images/gallery/6.jpg";
import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

const Collections = () => {
  const images = [
    { id: 0, image: shutters1, title: "Shutters" },
    { id: 1, image: doors, title: "Doors" },
    { id: 2, image: sliding, title: "Sliding Doors" },
    { id: 3, image: sliding1, title: "Partition Frame" },
    { id: 4, image: doors1, title: "Shower Partitions" },
    { id: 5, image: shutters2, title: "LED Mirrors" },
  ];

  // Split into rows of 3 images each
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    chunkedImages.push(images.slice(i, i + 3));
  }

  return (
    <div className="p-5">
      <h2 className="title text-center mb-2">Collections</h2>
      <UnderlineOnly className="mb-30" />
      <div className="container-fluid ">
        {chunkedImages.map((group, rowIndex) => (
          <div className="row" key={rowIndex}>
            {group.map((item, index) => {
              // Alternate layout by row
              let colClass = "col-md-4 mb-4";
              if (rowIndex % 2 === 0) {
                colClass = index === 0 ? "col-md-6 mb-4" : "col-md-3 mb-4";
              } else {
                colClass = index === 1 ? "col-md-6 mb-4" : "col-md-3 mb-4";
              }

              return (
                <div key={item.id} className={colClass}>
                  <div className="img-box">
                    <img src={item.image} alt={`Gallery ${item.id + 1}`} />
                    <div className="img-text">{item.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
