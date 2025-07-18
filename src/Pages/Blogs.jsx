// src/pages/Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import breadcrumbBg from "../assets/images/bg/innerbg4.webp";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/InnerBlog.css";
import UnderlineOnly from "../components/UnderlineOnly";
import Button from "../components/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import blogData from "../Data/blogData"; // ✅ Imported from external file

function Blogs() {
  return (
    <>
      <Breadcrumb pageTitle="Blogs" backgroundImage={breadcrumbBg} />
      <div className="container py-5">
        <div className="blogs-page">
          <h2 className="title text-center mb-4">
            Our <span className="color-text">Blog</span> Posts
          </h2>
          <UnderlineOnly className="mb-4" />
          <div className="row">
            {blogData.map((blog) => (
              <div key={blog.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="inner-blog">
                  <div className="blog-card shadow-sm border rounded">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />
                    <div className="blog-content p-3">
                      <p className="blog-date text-muted mb-2">
                        <FaRegClock /> {blog.date}
                      </p>
                      <h2 className="blog-heading mb-2">{blog.title}</h2>
                      <p className="blog-summary mb-3">{blog.summary}</p>
                      <div className="d-flex justify-content-start">
                        <Link to={`/blog/${blog.slug}`}>
                          <Button
                            text="Read More"
                            className="read-more"
                            icon={ArrowRightAltIcon}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
