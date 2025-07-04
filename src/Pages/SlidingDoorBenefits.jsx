import React from "react";
import { useParams } from "react-router-dom";
import SidebarServices from "../components/SidebarServices";

const blogPosts = [
  {
    name: "Benefits of Sliding Doors",
    slug: "benefits-of-sliding-doors",
    path: "/sliding-door-benefits/benefits-of-sliding-doors",
    image: "/images/sliding-door.jpg",
    date: "July 3, 2025",
  },
  {
    name: "Why Choose LED Mirrors",
    slug: "why-choose-led-mirrors",
    path: "/sliding-door-benefits/why-choose-led-mirrors",
    image: "/images/led-mirror.jpg",
    date: "June 25, 2025",
  },
];

function SlidingDoorBenefits() {
  const { slug } = useParams();
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return <div className="container py-5">Blog not found.</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <h2>{blog.name}</h2>
          <p>
            {/* Dummy content - replace with real data per blog */}
            This is the content for: <strong>{blog.name}</strong>
          </p>
          <img
            src={blog.image}
            alt={blog.name}
            className="img-fluid rounded my-3"
          />
          <p>
            <strong>Date:</strong> {blog.date}
          </p>
        </div>
        <div className="col-md-4">
          <SidebarServices
            type="blog"
            services={blogPosts}
            activeService={blog.name}
          />
        </div>
      </div>
    </div>
  );
}

export default SlidingDoorBenefits;
