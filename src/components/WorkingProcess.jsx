import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "../styles/WorkingProcess.css";
import "../styles/style.css";
import concept from "../assets/images/icons/our-working-process/1.png";
import Planning from "../assets/images/icons/our-working-process/2.png";
import Implementation from "../assets/images/icons/our-working-process/3.png";
import Quality from "../assets/images/icons/our-working-process/4.png";
import bg from "../assets/images/bg/bg3.jpg";
import UnderlineOnly from "./UnderlineOnly";

const WorkingProcess = () => {
  const cards = [
    {
      title: "Concept & Creativity",
      desc: "At HNH Profile Square, our creative journey begins with understanding your lifestyle and vision. We conceptualize sleek and modern sliding shutters and profiles that combine elegance with everyday functionality. From textures to colors, every design is tailored to elevate your space with a touch of innovative craftsmanship.",
      image: concept,
    },
    {
      title: "Planning & Detailing",
      desc: "Every project at HNH Profile Square is backed by meticulous planning and precise detailing. We assess space, materials, and user preferences to create customized sliding shutter solutions. Our process includes cost estimation, timeline planning, and technical drawings to ensure a flawless installation from start to finish.",
      image: Planning,
    },
    {
      title: "Implementation",
      desc: "Once the design and planning are finalized, our skilled team brings your vision to life with precision. At HNH Profile Square, we implement high-quality slider and shutter systems using advanced tools, ensuring smooth operation, durability, and a seamless finish tailored to your space.",
      image: Implementation,
    },
    {
      title: "Quality Delivery",
      desc: "At HNH Profile Square, we ensure every sliding shutter and profile is delivered with unmatched quality. Our commitment to excellence means precise fittings, premium materials, and thorough quality checks—giving you a flawless finish that’s both stylish and long-lasting.",
      image: Quality,
    },
  ];

  return (
    <section
      className="p-space"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container text-white">
        {/* Section Title */}
        <div className="working-process text-center mb-5">
          <h2 className="title text-center text-dark mb-4">
            Our <span className="color-text">Working</span> Process
          </h2>
          <UnderlineOnly className="mb-4" />
          <h4 className="text-dark">
            At HNH Profile Square, we believe in delivering precision, elegance,
            and functionality through a seamless process.
          </h4>
        </div>

        {/* Cards */}
        <div className="row g-3">
          {cards.map((card, index) => (
            <div
              className="col-12 col-lg-6 "
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 500} // Add staggered animation
            >
              <div className="position-relative border working-info rounded p-4 shadow h-100 card-hover bg-white text-dark">
                {/* Step number at top-right */}
                <div
                  className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    top: "10px",
                    right: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>

                {/* Icon and content */}
                <div className="d-flex align-items-start gap-3">
                  <div className="mt-1">
                    <LazyLoadImage
                      alt={card.title}
                      src={card.image}
                      width={50}
                      effect="blur"
                    />
                  </div>
                  <div>
                    <h5 className="fw-semibold my-text-primary mb-2">
                      {card.title}
                    </h5>
                    <p className="text-muted mb-0">{card.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
