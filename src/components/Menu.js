import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ toggleMenu }) => {
  return (
    <div className="menu">
      <span className="close" onClick={toggleMenu}>
        ×
      </span>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/shop" onClick={toggleMenu}>Shop</Link>
        </li>
        <li>
          <Link to="/our-products" onClick={toggleMenu}>Our Products</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
