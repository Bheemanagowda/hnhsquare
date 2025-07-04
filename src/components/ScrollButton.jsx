import React from "react";
import "../styles/ScrollButton.css";
const ScrollButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleScrollTop} className="scroll-button">
      ⬆
    </button>
  );
};

export default ScrollButton;
