import "../src/styles/style.css";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import BannerSlider from "./components/BannerSlider";
import AboutUs from "./View/AboutUs";
import WhychooseUs from "./components/WhychooseUs";
import ProductSlider from "./components/ProductSlider";
import WhyhnhProfile from "./components/WhyhnhProfile";
import CompanyStats from "./components/CompanyStats";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSlider";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Collections from "./components/Collections";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Video from "./components/Video";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <>
      <div>
        <TopHeader />

        <Header />
        <BannerSlider />

        <AboutUs />
        <WhychooseUs />
        <ProductSlider />
        <WhyhnhProfile />
        <Video />
        <Collections />
        <CompanyStats />
        <WhatsAppWidget />
        <TestimonialSlider />
        <ContactUs />
        <FAQSection />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default App;
