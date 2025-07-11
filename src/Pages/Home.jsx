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
import img1 from "../assets/images/gallery/led-mirror.jpg";
import img2 from "../assets/images/gallery/walkin-closet.jpg";
import img3 from "../assets/images/gallery/profil-door.jpg";
import img4 from "../assets/images/gallery/pooja-doors.jpg";
import img5 from "../assets/images/gallery/bathroom-partition.jpg";
import img6 from "../assets/images/gallery/wardrobe-sliding.jpg";
import MobileBanner from "../components/MobileBanner";
import WelcomeModal from "../components/WelcomeModal";
import MainServices from "../components/MainServices";
// import MainServicePage from "../components/MainServicePage";

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
      <div className="desktop-banner">
        <BannerSlider />
      </div>

      <div className="mobile-banner">
        <MobileBanner />
      </div>
      <AboutUs />
      <MainServices />
      {/* <MainServicePage /> */}
      <WhychooseUs />
      <ProductSlider />
      <WhyhnhProfile />
      <WorkingProcess />
      <Video />
      <Collections
        images={galleryImages}
        layoutType="home"
        title="Our"
        className="p-space"
      />

      <CompanyStats />

      <TestimonialSlider />
      <ContactUs />
      <FAQSection />
      <BlogSlider />
      <Clients />
      <WelcomeModal />
    </div>
  );
}

export default Home;
