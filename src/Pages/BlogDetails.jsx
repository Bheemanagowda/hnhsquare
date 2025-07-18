import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../Data/blogData";
import SidebarServices from "../components/SidebarServices";
import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg4.webp";

function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="container py-5">
        <h2>Blog not found</h2>
        <p>The blog you're looking for does not exist or was removed.</p>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        pageTitle="Blogs"
        backgroundImage={breadcrumbBg}
        showPageTitle={false}
        blogTitle={blog.title}
      />

      <div className="container py-5">
        <div className="row">
          {/* Blog Content */}
          <div className="col-md-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="img-fluid rounded mb-4"
            />
            <p className="text-muted mb-2">
              <strong>Date:</strong> {blog.date}
            </p>
            <h2 className="mb-3">{blog.title}</h2>
            <p>{blog.summary}</p>

            {/* Full Blog Content */}
            <div className="blog-content mt-4">
              <p>
                Sliding doors have become a hallmark of contemporary
                architecture. With their sleek appearance, space-saving
                functionality, and ability to connect indoor and outdoor spaces
                seamlessly, they are the perfect addition to any modern home.
              </p>
              <h4>1. Maximize Natural Light</h4>
              <p>
                Sliding glass doors allow ample sunlight to enter your home,
                creating bright, welcoming spaces. Large glass panels provide an
                unobstructed view of your garden, balcony, or patio while
                enhancing the feeling of openness.
              </p>

              <h4>2. Space-Saving Design</h4>
              <p>
                Unlike traditional hinged doors that require swing space,
                sliding doors operate on a track system. This makes them ideal
                for small rooms, apartments, and homes with open floor plans —
                allowing you to maximize usable space.
              </p>

              <h4>3. Seamless Indoor-Outdoor Flow</h4>
              <p>
                Sliding doors create a fluid transition between your living room
                and outdoor area, perfect for hosting guests, family barbecues,
                or relaxing evenings with a view.
              </p>

              <h4>4. Stylish and Minimalist Look</h4>
              <p>
                With slim frames and large panes, sliding doors match various
                interior styles — from ultra-modern to Scandinavian and
                minimalistic. Choose from aluminum, wood, or uPVC frames for the
                perfect look.
              </p>

              <h4>5. Improved Energy Efficiency</h4>
              <p>
                Thanks to double glazing and insulation, modern sliding doors
                help maintain your home's temperature — reducing energy bills
                and enhancing comfort throughout the year.
              </p>

              <h4>6. Enhanced Security Features</h4>
              <p>
                Today’s sliding doors come with multi-point locking systems,
                shatterproof glass, and sturdy frames — ensuring your home
                remains safe and secure.
              </p>

              <h4>7. Customization Options</h4>
              <p>
                From tinted or frosted glass to various frame finishes and track
                types, sliding doors can be fully tailored to match your style
                and needs.
              </p>

              <h4>Final Thoughts</h4>
              <p>
                Whether you're renovating or building a new home, sliding doors
                are a smart investment that combines beauty, efficiency, and
                practicality. Their ability to transform living spaces makes
                them an ideal choice for modern homes.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <SidebarServices
              type="blog"
              services={blogData}
              activeService={blog.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
