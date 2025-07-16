import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarServices from "../components/SidebarServices";
import InnerProductPage from "../components/InnerProductPage";
import Modal from "../components/Modal";
import { productData } from "../Data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg4.jpg";
import Button from "../components/Button"; // ✅ Make sure this exists

const ProductsDeatil = () => {
  const { slug } = useParams();
  const product = productData[slug];

  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (product?.category) {
      setActiveCategory(product.category);
    }
  }, [product]);

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  // Get all services
  const allServices = Object.entries(productData).map(([key, value]) => ({
    name: value.title,
    path: `/products/${key}`,
    category: value.category,
  }));

  const filteredServices = allServices.filter(
    (service) => service.category === activeCategory
  );

  if (!product) {
    return (
      <div className="container py-5 text-center text-danger">
        <h4>Product not found</h4>
        <p>Please check the URL or select from the available categories.</p>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        pageTitle={product.title}
        backgroundImage={breadcrumbBg}
        // category={activeCategory}
        productName={product.title}
      />
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <SidebarServices
              services={filteredServices}
              activeService={product.title}
              selectedTab={activeCategory}
              onTabChange={setActiveCategory}
            />
          </div>

          <div className="col-md-8">
            <InnerProductPage
              title={product.title}
              description={product.description}
              images={product.images}
              features={product.features}
              subtitle="Key Features"
              extraTitle={product.extraTitle}
              extraContent={product.extraContent}
              onEnquiryClick={handleOpen}
            />

            <div className="d-flex justify-content-end mt-4">
              <Button
                text="Enquiry Now"
                className="read-more"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>

        <Modal
          show={showModal}
          handleClose={handleClose}
          productName={product.title}
        />
      </div>
    </>
  );
};

export default ProductsDeatil;
