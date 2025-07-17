import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAOS } from "./hooks/useAOS";

// Page Imports
import Home from "./Pages/Home";
import Career from "./Pages/Career";
import Contactus from "./Pages/Contactus";
import Gallery from "./Pages/Gallery";
import OurClients from "./Pages/OurClients";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import InteriorDesign from "./Pages/InteriorDesign";
import ProfileSection from "./Pages/ProfileSection";
import ProductsDeatil from "./Pages/ProductsDeatil";

// Component Imports
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop"; // use correct extension if needed

import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Loader from "./components/Loader";
import ScrollButton from "./components/ScrollButton";
import WhatsAppWidget from "./components/WhatsAppWidget";
import SliderDoor from "./Pages/SliderDoor";

function App() {
  useAOS();
  const [loading, setLoading] = useState(true);

  // ✅ Move scroll restoration here
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <ScrollToTop />
      <TopHeader />
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/clients" element={<OurClients />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="sliding-door" element={<SliderDoor />} />
        <Route path="/service/interior-design" element={<InteriorDesign />} />
        <Route path="/service/profile-section" element={<ProfileSection />} />
        <Route path=":slug" element={<ProductsDeatil />} />
        <Route
          path="*"
          element={<h2 className="text-center my-5">404 - Page Not Found</h2>}
        />
      </Routes>

      <Footer />
      <ScrollButton />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
