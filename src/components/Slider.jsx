// src/components/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.module.css"; // Optional: For your custom styles

const Slider = ({
  images = [], // Used for image sliders
  items = [], // Used for custom sliders (e.g., products)
  renderItem = null, // Optional custom render function
  className = "",
  imageClassName = "banner-img",
  showPagination = true,
  showNavigation = false,
  slidesPerView = 1,
  spaceBetween = 10,
  breakpoints = {}, // For responsive layout
}) => {
  const data = items.length > 0 ? items : images;

  return (
    <div className={className}>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem ? (
              renderItem(item, index)
            ) : (
              <img
                src={item}
                alt={`Slide ${index + 1}`}
                className={imageClassName}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
