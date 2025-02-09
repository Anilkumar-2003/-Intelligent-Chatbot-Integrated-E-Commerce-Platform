import React, { useState, useEffect } from "react"; // Added useEffect import
import axios from "axios"; // Added axios import
import "../pages/OurProducts.css";

const OurProducts  = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
      axios.get("http://localhost:5000/products")
          .then(response => setProducts(response.data))
          .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                {filteredProducts.map(product => (
                    <div key={product._id} className="item-card">
                        <img src={product.image} alt={product.name} className="item-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Product ID:</strong> {product.productId}</p>
                    </div>
                ))}
            </div>
    </div>
  );
};

export default OurProducts;
