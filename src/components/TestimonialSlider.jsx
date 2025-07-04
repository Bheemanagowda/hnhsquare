import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/TestimonialSlider.css";
import "../styles/space.css";
import avatara from "../assets/images/testimonials/test.png";
import UnderlineOnly from "./UnderlineOnly";

const testimonials = [
  {
    name: "Vijay Patel",
    text: "I recently worked with HNH SQUARE PROFILE, and I couldn’t be happier with the outcome. Their team is highly experienced and professional. They specialize in profile shutters, sliding doors, partition frames, shower partitions, and LED mirrors. The quality of their work and attention to detail truly impressed me. I highly recommend them!",
    image: avatara,
    rating: 5,
  },
  {
    name: "Anjali Mehra",
    text: "Choosing HNH SQUARE PROFILE for my project was a great decision. Their expertise in profile shutters, sliding doors, partition frames, shower partitions, and LED mirrors really shows in their work. The team delivered excellent quality with a professional approach. I’m extremely pleased with the results and would gladly recommend them to others.",
    image: avatara,
    rating: 4,
  },
  {
    name: "Ravi Kumar",
    text: "I had a great experience working with HNH SQUARE PROFILE. Their attention to detail and the quality of their profile shutters, sliding doors, and LED mirrors were outstanding. The installation was smooth, and the team remained highly professional throughout the process. I'm very happy with the outcome and would definitely recommend them to my friends.",
    image: avatara,
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="p-space">
      <div className="container">
        <div className="testimonial-wrapper">
          <h2 className="testimonial-heading text-center title mb-4">
            Client <span className="color-text ">Reviews</span>
          </h2>
          <UnderlineOnly className="mb-4" />

          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1025: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.name}
                      effect="blur"
                      className="avatar"
                    />
                    <h4 className="name">{item.name}</h4>
                  </div>
                  <p className="message">{item.text}</p>
                  <div className="stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <FaQuoteRight className="quote-icon" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
