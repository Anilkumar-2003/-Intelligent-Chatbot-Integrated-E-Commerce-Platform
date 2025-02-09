import React from "react";
import { useNavigate } from "react-router-dom";
import '../pages/Shop.css';

const Shop = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Electronics", image: "https://i.postimg.cc/Kvnd2Mss/Green-and-Black-Vivid-Bold-Blocks-Electronics-and-Appliances-Banner.png" },
    { name: "Beauty and Personal Care", image: "https://i.postimg.cc/kgnCBc0b/Health-and-Personal-Care-Product-Description-in-Purple-and-Cream-Conservative-and-Minimal-Style.png" },
    { name: "Womens Wear", image: "https://i.postimg.cc/gcNPXRKX/image.png" },
    { name: "Mens Wear", image: "https://i.postimg.cc/0QhXDkr4/Black-and-White-Vintage-Illustration-Men-s-Fashion-Banner.png" }
  ];

  const handleCategoryClick = (category) => {
    navigate("/our-products", { state: { category } });
  };

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop by Category</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <h2 className="category-name">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
