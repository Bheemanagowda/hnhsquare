import React from "react";
import Breadcrumb from "./Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg4.jpg";
import interiorImg from "../assets/images/interior-design/abt.jpg";
import UnderlineOnly from "./UnderlineOnly";
import kitchen from "../assets/images/interior-design/modular-kitchen-interior-design-services.png";
import wardrobe from "../assets/images/interior-design/modular-kitchen-interior-design-services.png";
import weekend from "../assets/images/interior-design/modular-kitchen-interior-design-services.png";
import dining from "../assets/images/interior-design/crockery-unit.png";
import tv from "../assets/images/interior-design/crockery-unit.png";
import desk from "../assets/images/interior-design/crockery-unit.png";
import account_tree from "../assets/images/interior-design/crockery-unit.png";
import lightbulb from "../assets/images/interior-design/crockery-unit.png";
import wallpaper from "../assets/images/interior-design/crockery-unit.png";
import format_paint from "../assets/images/interior-design/crockery-unit.png";
import bathtub from "../assets/images/interior-design/crockery-unit.png";
import plumbing from "../assets/images/interior-design/crockery-unit.png";
import self_improvement from "../assets/images/interior-design/crockery-unit.png";
import home from "../assets/images/interior-design/crockery-unit.png";
import chair from "../assets/images/interior-design/crockery-unit.png";
import child_care from "../assets/images/interior-design/crockery-unit.png";
import workstation from "../assets/images/interior-design/crockery-unit.png";

const MainServicePage = () => {
  const endEndToSolutions = [
    { id: 1, name: "Modular Kitchen", image: kitchen },
    { id: 2, name: "Storage and Wardrobe", image: wardrobe },
    { id: 3, name: "Crockery Units", image: dining },
    { id: 4, name: "Space Saving Furniture", image: weekend },
    { id: 5, name: "TV Units", image: tv },
    { id: 6, name: "Study Tables", image: desk },
    { id: 7, name: "False Ceiling", image: account_tree },
    { id: 8, name: "Lights", image: lightbulb },
    { id: 9, name: "Wallpaper", image: wallpaper },
    { id: 10, name: "Wall Paint", image: format_paint },
    { id: 11, name: "Bathroom", image: bathtub },
    { id: 12, name: "Utility Area", image: plumbing },
    { id: 13, name: "Pooja Unit", image: self_improvement },
    { id: 14, name: "Foyer Designs", image: home },
    { id: 15, name: "Movable Furniture", image: chair },
    { id: 16, name: "Kids Bedroom", image: child_care },
    { id: 17, name: "Guest Bedroom", image: dining }, // Replace with correct image if available
    { id: 18, name: "Master Bedroom", image: tv }, // Replace with correct image if available
    { id: 19, name: "Balcony Design", image: lightbulb }, // Replace with correct image if available
    { id: 20, name: "Workstation", image: workstation },
  ];

  return (
    <div>
      <Breadcrumb
        pageTitle="HNH Square Interiors"
        backgroundImage={breadcrumbBg}
        showPageTitle={false}
        blogTitle="Interior Design"
      />

      <section className="p-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={interiorImg}
                alt="Interior Design"
                className="w-100 shadow-lg rounded"
              />
            </div>
            <div className="col-md-6">
              <h5 className="title">
                Turning <span className="color-text">Ordinary Rooms</span> into
                Masterpieces.
              </h5>
              <p>
                At HNH Square Interiors, we believe your home should be a true
                reflection of your personality and lifestyle. From elegant
                living rooms to cozy bedrooms and modular kitchens, we design
                every space with creativity, precision, and care. Our expert
                team transforms ordinary interiors into extraordinary living
                environments, blending functionality with aesthetics.
              </p>
              <p>
                Whether it’s a new home or a renovation project, we handle
                everything from concept development to final finishing — with
                premium materials, flawless craftsmanship, and a commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 bg-light">
        <div className="container">
          <div className="title text-center mb-4">
            End-to-end <span className="color-text">interior</span> solutions
          </div>
          <UnderlineOnly className="mb-4" />
          <div className="row">
            {endEndToSolutions.map((item) => (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                  <span
                    className="material-icons text-primary"
                    style={{ fontSize: "36px" }}
                  >
                    <img
                      src={item.image}
                      alt="HNH Square Interior Design"
                      className="mb-3"
                    />
                  </span>
                  <h6 className="mt-2">{item.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainServicePage;
