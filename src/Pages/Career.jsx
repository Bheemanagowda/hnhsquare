import React from "react";
import "../styles/Career.css"; // Optional: Add styling here
import UnderlineOnly from "../components/UnderlineOnly";
import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg1.webp";
const Career = () => {
  return (
    <div>
      <Breadcrumb
        pageTitle="Careers"
        backgroundImage={breadcrumbBg}
        className=""
      />
      <div className="container py-5 px-3">
        <h2 className="text-start title mb-4">
          Careers At <span className="color-text"> HNH SQUARE</span>
        </h2>
        <div className="underline-wrapper-left">
          <div className="underline-only who-we-are mb-4 border-color">
            <UnderlineOnly className="mb-4" />
          </div>
        </div>
        <p className="career-description">
          <strong>HNH SQUARE</strong> believes that the right environment and
          the right opportunities allow deserving people to deliver outstanding
          results. Our employees have the opportunity to learn and develop, to
          grow and perform to their fullest potential. They work in an
          environment that values their ideas, teamwork, and personal safety.
        </p>
        <p className="career-description">
          Our culture expects results, and for those results to be achieved in a
          customer-focused & respectful manner. Our success and growth continue
          with our main assets — our people — which is why we are always looking
          to expand our talented team. If you're ready for a career with
          challenges, a demanding innovative approach, and to work in an
          environment that fosters professional development, we would love to
          hear from you.
        </p>
        <p className="career-contact mt-4">
          <strong>If you're ready to be a part of HNH SQUARE</strong>, you can
          send mail through the following E-Mail Id :{" "}
          <a href="mailto:hnhsquare@gmail.com" className="career-email">
            hnhsquare@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Career;
