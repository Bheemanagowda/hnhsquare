import React, { useState } from "react";
import "../styles/FAQSection.css";
import doctorImage from "../assets/images/faq/faq.png";
import bgImage from "../assets/images/faq/bg.jpg";
import UnderlineOnly from "./UnderlineOnly";

import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is a sliding door?",
    answer:
      "Sliding doors are designed to move horizontally along a track, offering a modern, space-saving solution ideal for balconies, patios, and interior rooms.",
  },
  {
    question: "What does 'open door profile' mean?",
    answer:
      "An open door profile refers to a frame without an integral stop or soffit, providing a sleek, minimalistic look. It’s commonly used for double-acting doors or doors with rescue hardware.",
  },
  {
    question: "What are open profile shutters?",
    answer:
      "Open profile shutters are typically aluminum-based window coverings with adjustable slats (louvers) that allow light and privacy control. They can be fully opened or closed as needed.",
  },
  {
    question: "Where can LED mirrors be used?",
    answer:
      "LED mirrors are widely used in bathrooms, dressing rooms, and small or dimly lit areas. They provide both functional lighting and aesthetic appeal.",
  },
  {
    question: "What is a profile partition?",
    answer:
      "A profile partition is a structural framework, usually made from aluminum, used to create separate spaces or rooms. They are ideal for offices, homes, or commercial setups.",
  },
  {
    question: "What is a printed LED wall frame?",
    answer:
      "A printed LED wall frame is an aluminum channel designed to hold LED strip lights behind a printed display, offering a sleek, illuminated feature for walls or branding areas.",
  },
  {
    question: "Do you provide custom sizes for your products?",
    answer:
      "Yes, all our profiles and products can be customized to fit your specific project requirements, including size, color, and installation needs.",
  },
  {
    question: "Can you handle installation as well?",
    answer:
      "Absolutely! We provide end-to-end services including consultation, design, supply, and professional installation for all our products.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="faq-container p-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 faq-left">
            <h2 className="title text-white text-center mb-4">FAQ'S</h2>

            <UnderlineOnly className="mb-30 .who-we-are border-color" />

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="faq-icon">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="col-md-6 faq-right">
            <img
              src={doctorImage}
              alt="Doctor and Patient"
              className="doctor-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
