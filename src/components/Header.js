import React, { useState } from "react";
import { Link } from "react-router-dom";



const Header = ({ onSearch }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <div className="logo">
        <a href="#">PANDU SHOPs</a>
      </div>

      <div className={`menu ${menuVisible ? "visible" : ""}`}>
        <a href="#" onClick={toggleMenu}>
          <ion-icon name="close" className="close"></ion-icon>
        </a>
        <ul>
          <li>
            <Link to="/" className="under">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" className="under">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/our-products" className="under">
              OUR PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="under">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="under">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="search">
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div> */}

      <div className="heading">
        <ul>
          <li>
            <Link to="/" className="under">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" className="under">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/our-products" className="under">
              OUR PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="under">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="under">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>

      <div className="heading1">
        <ion-icon name="menu" className="ham" onClick={toggleMenu}></ion-icon>
      </div>
    </header>
  );
};

export default Header;
