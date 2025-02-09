import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OurProducts from "./pages/OurProducts";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import Slider from "./components/Slider";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {/* Only render the Slider on the Home page */}
      {location.pathname === '/' && <Slider />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
