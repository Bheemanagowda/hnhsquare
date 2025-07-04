import React, { useEffect, useState } from "react";
import { useAOS } from "./hooks/useAOS";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Career from "./Pages/Career";
import Contactus from "./Pages/Contactus";
import Header from "./components/Header"; // ✅ Import Header
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Loader from "./components/Loader";
import ScrollButton from "./components/ScrollButton";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Gallery from "./Pages/Gallery";
import OurClients from "./Pages/OurClients";
import About from "./Pages/About";
import SliderDoor from "./Pages/SliderDoor";
import Blogs from "./Pages/Blogs";

import BlogDetails from "./Pages/BlogDetails";

function App() {
  useAOS();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      <TopHeader />
      <Header />
      <Routes>
        {/* Redirect root path "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Home page route */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/slider-door" element={<SliderDoor />} />
        <Route path="/clients" element={<OurClients />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
      <Footer />
      <ScrollButton />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
