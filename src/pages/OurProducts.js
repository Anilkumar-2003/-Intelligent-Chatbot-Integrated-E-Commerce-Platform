import React, { useState } from "react";
import "../pages/OurProducts.css";

const OurProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Static product data
  const products = [
    {
      productId: 1,
      productName: "SHOES",
      productPrice: "₹1059",
      productDescription: "Stylish and comfortable shoes perfect for everyday wear.",
      img: "https://i.postimg.cc/DzCLtqSs/shoe.jpg",
    },
    {
      productId: 2,
      productName: "MEN's T-SHIRT",
      productPrice: "₹879",
      productDescription: "Soft cotton men's T-shirt for casual and comfortable wear.",
      img: "https://i.postimg.cc/hjfTgfmY/mens-t-shirt.webp",
    },
    {
      productId: 3,
      productName: "JEANS",
      productPrice: "₹999",
      productDescription: "Denim jeans offering a perfect fit and comfort for daily use.",
      img: "https://i.postimg.cc/CxhZSRT4/denim-jeans.jpg",
    },
    {
      productId: 4,
      productName: "WATCH",
      productPrice: "₹1099",
      productDescription: "Stylish analog watch with a durable leather strap for everyday wear.",
      img: "https://i.postimg.cc/RFXsp6Bb/watch.webp",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="items-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.productId} className="item-card">
              <img
                src={product.img}
                alt={product.productName}
                className="item-image"
              />
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
              <p>
                <strong>Price:</strong> {product.productPrice}
              </p>
              <p>
                <strong>Product ID:</strong> {product.productId}
              </p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
