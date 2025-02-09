// AboutUs.js
import React from 'react';
// import './About.css';
import Footer from '../components/Footer'; // Import the Footer component

const AboutUs = () => {
  return (
    <div className='about-container'>
    <div className="about-us">
      <h1>About PANDU Shops</h1>
      <p>Welcome to PANDU Shops, your number one source for all things fashion, gadgets, and more. We're dedicated to giving you the very best of products, with a focus on quality, customer service, and uniqueness.</p>
      <p>Founded in 2021, PANDU Shops has come a long way from its beginnings. We now serve customers all over the world and are thrilled to be a part of the eco-friendly, fair trade wing of the shopping industry.</p>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default AboutUs;