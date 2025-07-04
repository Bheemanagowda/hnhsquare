import React from "react";

const MapEmbed = () => {
  return (
    <div className="col-md-12 mb-4" data-aos="fade-right" data-aos-delay="300">
      <div className="card shadow border border-secondary h-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4311687512495!2d77.56502697575472!3d12.879973416879116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1553f5804715%3A0x50a13c66f15888bc!2s29%2C%20Subbanna%20Layout%2C%20New%20Bank%20Colony%2C%20Chunchankatte%2C%20Konanakunte%2C%20Bengaluru%2C%20Karnataka%20560062!5e0!3m2!1sen!2sin!4v1750422895822!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "505px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
