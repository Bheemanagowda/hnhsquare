import BannerSlider from "../components/BannerSlider";

import AboutUs from "../components/AboutUs";
import WhychooseUs from "../components/WhychooseUs";
import ProductSlider from "../components/ProductSlider";
import WhyhnhProfile from "../components/WhyhnhProfile";
import CompanyStats from "../components/CompanyStats";

import TestimonialSlider from "../components/TestimonialSlider";
import Clients from "../components/Clients";
import ContactUs from "../components/ContactUs";
import Collections from "../components/Collections";

import Video from "../components/Video";
import BlogSlider from "../components/BlogSlider";
import FAQSection from "../components/FAQSection";
import WorkingProcess from "../components/WorkingProcess";
import "../styles/style.css";
import img1 from "../assets/images/gallery/led-mirror.webp";
import img2 from "../assets/images/gallery/walkin-closet.webp";
import img3 from "../assets/images/gallery/profil-door.webp";
import img4 from "../assets/images/gallery/pooja-doors.webp";
import img5 from "../assets/images/gallery/bathroom-partition.webp";
import img6 from "../assets/images/gallery/wardrobe-sliding.webp";
import MobileBanner from "../components/MobileBanner";

import MainServices from "../components/MainServices";

function Home() {
  const galleryImages = [
    { id: 0, image: img1, title: "LED Mirrors" },
    { id: 1, image: img2, title: "Walkin Closet" },
    { id: 2, image: img3, title: "Profile Doors" },
    { id: 3, image: img4, title: "Pooja Doors" },
    { id: 4, image: img5, title: "Bathroom Partitions" },
    { id: 5, image: img6, title: "Wardobe Sliding" },
  ];

  return (
    <div>
      {/* banner section start */}
      <div className="desktop-banner">
        <BannerSlider />
      </div>
      {/* banner section end */}
      {/* Mobile banner section start */}
      <div className="mobile-banner">
        <MobileBanner />
      </div>
      {/* Mobile banner section end */}
      {/* About Us section start */}
      <AboutUs />
      {/* About Us section end */}
      {/* Main Services section start */}
      <MainServices />
      {/* Main Services section end */}

      {/* Why Choose Us section start */}
      <WhychooseUs />
      {/* Why Choose Us section end */}

      {/* Product Slider section start */}
      <ProductSlider />
      {/* Product Slider section end */}

      {/* Why HNH Profile section start */}
      <WhyhnhProfile />
      {/* Why HNH Profile section end */}

      {/* Working Process section start */}
      <WorkingProcess />
      {/* Working Process section end */}

      {/* Video section start */}
      <Video />
      {/* Video section end */}

      {/* Collections section start */}
      <Collections
        images={galleryImages}
        layoutType="home"
        title="Our"
        className="p-space"
      />
      {/* Collections section end */}

      {/* Company Stats section start */}
      <CompanyStats />
      {/* Company Stats section end */}

      {/* Testimonial Slider section start */}
      <TestimonialSlider />
      {/* Testimonial Slider section end */}

      {/* Contact Us section start */}
      <ContactUs />
      {/* Contact Us section end */}

      {/* FAQ section start */}
      <FAQSection />
      {/* FAQ section end */}

      {/* Blog Slider section start */}
      <BlogSlider />
      {/* Blog Slider section end */}

      {/* Clients section start */}
      <Clients />
      {/* Clients section end */}
    </div>
  );
}

export default Home;
