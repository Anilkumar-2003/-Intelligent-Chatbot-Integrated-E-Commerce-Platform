import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OurProducts from "./pages/OurProducts";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import Slider from "./components/Slider";
import ChatBot from "./components/Chatbot";
import { BsChatDots } from "react-icons/bs"; // Chat icon
import { IoClose } from "react-icons/io5"; // Close icon

const App = () => {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false); // State to toggle chatbot

  return (
    <>
      <Header />
      {location.pathname === "/" && <Slider />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>

      {/* Chat Icon (Only visible when chatbot is closed) */}
      {!showChat && (
        <div 
          style={{
            position: "fixed",
            bottom: "60px",
            right: "40px",
            zIndex: 1000,
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => setShowChat(true)} // Show chatbot
        >
          <BsChatDots size={24} />
        </div>
      )}

      {/* ChatBot Window */}
      {showChat && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "350px",
          height: "500px",
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          overflow: "hidden",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column"
        }}>
          {/* Chat Header with Close Button */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            fontWeight: "bold"
          }}>
            Order Here
            <IoClose 
              size={24} 
              style={{ cursor: "pointer" }} 
              onClick={() => setShowChat(false)} // Hide chatbot
            />
          </div>

          {/* Chat Component */}
          <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
            <ChatBot />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
