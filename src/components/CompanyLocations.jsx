import React from "react";
import "./CompanyLocations.css"; // optional CSS if needed

const CompanyLocations = () => {
  return (
    <div
      className="company-locations"
      style={{ fontFamily: "Montserrat, sans-serif", padding: "2rem" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        HNH SQUARE LOCATIONS
      </h2>

      <div className="location-card" style={styles.card}>
        <h3 style={styles.title}>HNH SQUARE PROFILE</h3>
        <p style={styles.address}>
          29/3, New Bank Colony, Amruthnagar Main Road, <br />
          Konanakunte, Bangalore - 560062
        </p>
      </div>

      <div className="location-card" style={styles.card}>
        <h3 style={styles.title}>HNH SQUARE INTERIORS</h3>
        <p style={styles.address}>
          No.5, Basappa Reddy Compound, Near Venkateshwara Temple, <br />Y V
          Annaiah Road, Kanakapura Main Road, Yelachenahalli - 560078
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "rgba(0, 0, 0, 0.05)",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "0.5rem",
    color: "#b71b0c",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  address: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.6",
  },
};

export default CompanyLocations;
