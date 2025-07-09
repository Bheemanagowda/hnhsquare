import React, { useState } from "react";
import InnerProductPage from "../components/InnerProductPage";
import SidebarServices from "../components/SidebarServices";

import Slider1 from "../assets/images/inner-products/slider-door/1.jpg";
import Slider2 from "../assets/images/inner-products/slider-door/2.jpg";
import Slider3 from "../assets/images/inner-products/slider-door/3.jpg";

import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg3.jpg";
import Button from "../components/Button";

// Bootstrap Modal imports
import Modal from "../components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const productImages = [Slider1, Slider2, Slider3];

const features = [
  "Precision-engineered sliding mechanism with silent rollers",
  "Rust-resistant aluminium profiles for long-term durability",
  "Elegant finishes and customizable size options",
  "Space-saving design ideal for compact areas",
  "Available with tempered glass for safety and elegance",
  "Low maintenance and easy to operate",
];

const description =
  "At HNH Square Profile, our Sliding Doors are crafted to bring together style, space-efficiency, and superior performance. Designed for both modern homes and commercial environments, these doors provide a smooth, quiet glide with a sleek, contemporary appearance.";

const extraTitle = "Why Choose HNH Square Profile?";
const extraContent =
  "We bring innovation and quality together in every design. Our Sliding Doors are more than just partitions—they’re elegant, reliable, and tailored to suit your space with precision and flair.";

const SliderDoor = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Breadcrumb
        pageTitle="Products"
        backgroundImage={breadcrumbBg}
        showPageTitle={false}
        blogTitle="Sliding Door"
      />

      <div className="container p-space">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-md-4 mb-4">
            <SidebarServices activeService="Sliding Door" />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-8">
            <InnerProductPage
              title="Sliding Door"
              description={description}
              images={productImages}
              features={features}
              subtitle="Key Features"
              extraTitle={extraTitle}
              extraContent={extraContent}
            />

            <div
              className="d-flex justify-content-end mt-4"
              onClick={handleShow}
            >
              <Button text="Enquiry Now" className="read-more" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        handleClose={handleClose}
        productName="Sliding Door"
      />
    </>
  );
};

export default SliderDoor;
