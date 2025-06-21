import React from "react";
import "../styles/Telephone.css";

const phoneNumbers = [
  { number: "+91 9886540411", label: "Customer Care" },
  { number: "+91 08026322085", label: "Support" },
];

const Telephone = () => {
  return (
    <div className="phone-numbers">
      :
      {phoneNumbers.map((item, index) => (
        <React.Fragment key={index}>
          <a href={`tel:${item.number}`}>{item.number}</a>
          {index < phoneNumbers.length - 1 && <span> / </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Telephone;
