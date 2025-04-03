import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS

const categories = [
  { name: "Ethnic Wear", discount: "50-80% OFF", image: "https://i.postimg.cc/zX5H3wBZ/Final-Design.png" },
  { name: "Ethnic Casual Wear", discount: "40-80% OFF", image: "https://i.postimg.cc/9FtTB8SQ/Pink-Beige-And-Yellow-Modern-Customer-Testimonial-Instagram-Post.png" },
  { name: "Jewellery", discount: "30-70% OFF", image: "https://i.postimg.cc/rsb8GkkP/Beige-Jewelry-Collage-Instagram-Post.png" },
  { name: "Activewear", discount: "30-70% OFF", image: "https://i.postimg.cc/SKXH8Msk/Beige-Minimalist-Men-s-Fashion-Shoes-Discount-Instagram-Post.png" },
  { name: "Kids Wear", discount: "40-80% OFF", image: "https://i.postimg.cc/wvXfccd8/Blue-White-Playful-New-Collection-Kids-Fashion-Sale-Instagram-Post.png" },
  // { name: "Sportswear", discount: "30-80% OFF", image: "https://i.postimg.cc/wvXfccd8/Blue-White-Playful-New-Collection-Kids-Fashion-Sale-Instagram-Post.png" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Festival Banner */}
      <div className="festival-banner">
        <h1><i>Festive Collection</i></h1>
        <p>Celebrate with exclusive traditional wear for Men & Women</p>
      </div>

      {/* Categories Section */}
      <h2 className="section-title">Grand Global Brands</h2>
      <div className="home-product">
        {categories.map((cat, index) => (
          <div key={index} className="home-product-card" onClick={() => navigate("/our-products")}>
            <img src={cat.image} alt={cat.name} />
            <div className="product-text">
              <p>{cat.name}</p>
              <p>{cat.discount}</p>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
