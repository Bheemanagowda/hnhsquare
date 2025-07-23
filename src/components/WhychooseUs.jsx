import "../styles/space.css";
import UnderlineOnly from "./UnderlineOnly";

// Image imports
import quality from "../assets/images/icons/why-choose-us/1.png";
import expert from "../assets/images/icons/why-choose-us/2.png";
import warranty from "../assets/images/icons/why-choose-us/3.png";
import timely from "../assets/images/icons/why-choose-us/4.png";
import price from "../assets/images/icons/why-choose-us/5.png";
import unit from "../assets/images/icons/why-choose-us/6.png";

const features = [
  {
    title: "Quality Materials",
    image: quality,
    desc: "At HNH  Square, we believe great design starts with great materials. We use only high-quality, durable materials to ensure lasting performance and exceptional results.",
  },
  {
    title: "200+ Expert Designers",
    image: expert,
    desc: "With 200+ expert designers, we turn ideas into impactful designs through creativity, precision, and industry expertise — delivering smart, functional solutions.",
  },
  {
    title: "10 Years of Warranty",
    image: warranty,
    desc: "At HNH  Square, we proudly offer 10 Years Warranty on all sliding shutters and profiles—reflecting our commitment to quality, durability, and lasting satisfaction.",
  },
  {
    title: "Timely Delivery",
    image: timely,
    desc: "At HNH Square, we ensure on-time delivery through a well-planned schedule and efficient coordination—without compromising on quality or precision.",
  },
  {
    title: "Price Transparency",
    image: price,
    desc: "We offer clear and upfront pricing with no hidden costs, detailed estimates, and full transparency throughout every stage of your project.",
  },
  {
    title: "In-House Manufacturing Unit",
    image: unit,
    desc: "We maintain a fully-equipped in-house unit ensuring quality control, faster turnaround, and customized production to meet your unique requirements with precision.",
  },
];

const WhychooseUs = () => {
  // Initialize AOS when component mounts

  return (
    <div className="why-choose p-space">
      <div className="container">
        <h2 className="text-center title mb-4">
          Why <span className="color-text">Choose</span> Us
        </h2>
        <UnderlineOnly className="mb-30" />

        <div className="row">
          {features.map((item, index) => (
            <div
              className="col-md-4 mb-4 col-12 col-md-6 col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 shadow text-center h-100 whychoose-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "80px" }}
                />
                <h5 className="whychoose-sub-title">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhychooseUs;
