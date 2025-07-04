import React from "react";
import Slider from "./Slider";
import sliding from "../assets/images/blog-post/sliding-door.jpg";
import led from "../assets/images/blog-post/led-mirror.jpg";
import partiotion from "../assets/images/blog-post/partition.jpg";
import shutters from "../assets/images/blog-post/open-door.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "../styles/BlogSlider.css";
import UnderlineOnly from "./UnderlineOnly";
import Button from "./Button";

const blogPosts = [
  {
    date: "June 24, 2025",
    title:
      "The Perfect Guide to 3-Door Sliding Wardrobe Designs – A Stylish Solution for Every Bedroom",
    desc: "When designing the perfect bedroom, countless decisions must be made – from the colour scheme to the furniture arrangement...",
    img: sliding,
  },
  {
    date: "June 18, 2025",
    title: "Transform Your Bathroom Ambiance with Modern LED Mirrors",
    desc: "LED mirrors are more than just reflective surfaces – they enhance lighting, add elegance, and bring smart functionality to your daily routine...",
    img: led,
  },
  {
    date: "June 10, 2025",
    title: "Create Sleek Living Spaces with Aluminium Frame Partitions",
    desc: "Discover how aluminium profile partitions by HNH PROFILE SQUARE offer the perfect blend of openness, privacy, and architectural style...",
    img: partiotion,
  },
  {
    date: "June 2, 2025",
    title: "Elegant Entryways: Why Open Doors Are Making a Stylish Comeback",
    desc: "Minimal yet timeless – open door designs are trending in modern homes. Find out why they’re the go-to choice for elegant interiors...",
    img: shutters,
  },
];

const BlogSlider = () => {
  const renderBlogCard = (post, index) => (
    <div className="blog-card" key={index}>
      <img
        src={post.img}
        alt={post.title}
        loading="lazy" // ✅ Lazy loading added here
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <div className="ps-md-4 pe-md-4 pb-3 blog-card-mobile">
        <p className="text-sm text-gray-500">{post.date}</p>
        <h3 className="text-2xl font-semibold text-gray-800 blog-title">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm blog-desc">{post.desc}</p>
        <div className="d-flex justify-content-center">
          <a href="/blogs">
            {" "}
            <Button
              text="Read More"
              className="read-more blog-btn"
              icon={ArrowRightAltIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-space">
      <div className="container-fluid">
        <div className="py-12 bg-white">
          <h2 className="text-center title mb-10 mb-4">
            Our <span className="color-text">Recent</span> Posts
          </h2>
          <UnderlineOnly className="mb-30 mb-4" />

          <Slider
            items={blogPosts}
            renderItem={renderBlogCard}
            slidesPerView={1}
            spaceBetween={30}
            showPagination={false}
            showNavigation={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              1025: { slidesPerView: 3 },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
