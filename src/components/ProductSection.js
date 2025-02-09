import React from "react";

const ProductSection = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10", info: "Info 1" },
    { id: 2, name: "Product 2", price: "$20", info: "Info 2" },
    { id: 3, name: "Product 3", price: "$30", info: "Info 3" },
  ];

  return (
    <div className="section2">
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="items">
            <div className="img">
              <img
                src="https://via.placeholder.com/200"
                alt={product.name}
              />
            </div>
            <h3 className="name">{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="info">{product.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;

