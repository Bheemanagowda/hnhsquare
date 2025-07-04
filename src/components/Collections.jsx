import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import UnderlineOnly from "./UnderlineOnly";
import "../styles/Gallery.css";

const Collections = ({
  images,
  columnClass = "col-md-4",
  layoutType,
  title,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const chunkedImages = [];

  if (layoutType === "home") {
    chunkedImages.push(images.slice(0, 3)); // First row
    chunkedImages.push(images.slice(3, 6)); // Second row
  } else {
    for (let i = 0; i < images.length; i += 3) {
      chunkedImages.push(images.slice(i, i + 3));
    }
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className={className}>
      {title && (
        <>
          <h2 className="title text-center mb-4">
            {title} <span className="color-text">Collections</span>
          </h2>
          <UnderlineOnly className="mb-30" />
        </>
      )}

      <div className="container-fluid">
        {chunkedImages.map((group, rowIndex) => (
          <div className="row" key={rowIndex}>
            {group.map((item, index) => {
              let colClass = columnClass;

              if (layoutType === "home") {
                if (rowIndex === 0) {
                  colClass = index === 0 ? "col-md-6 mb-4" : "col-md-3 mb-4";
                } else if (rowIndex === 1) {
                  colClass = index === 1 ? "col-md-6 mb-4" : "col-md-3 mb-4";
                }
              }

              const globalIndex =
                layoutType === "home"
                  ? rowIndex * 3 + index
                  : rowIndex * 3 + index;

              return (
                <div key={item.id} className={colClass}>
                  <motion.div
                    className="img-box position-relative overflow-hidden rounded"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => openLightbox(globalIndex)}
                    style={{ cursor: "pointer" }}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title || ""}
                      loading="lazy"
                      className="img-fluid w-100 rounded"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: layoutType === "gallery" ? "389px" : "100%",
                      }}
                    />
                    {layoutType === "home" && (
                      <div className="img-text">{item.title}</div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images.map((img) => ({ src: img.image }))}
      />
    </div>
  );
};

export default Collections;
