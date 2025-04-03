import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownVisible(false);
  };

  return (
    <header>
      <div className="logo">
        <a href="#"><i>PANDU SHOPs</i></a>
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

      {/* Profile Icon and Dropdown */}
      <div className="profile">
        <ion-icon
          name="person-circle-outline"
          className="profile-icon"
          onClick={toggleProfileDropdown}
        ></ion-icon>
        {profileDropdownVisible && (
          <div className="profile-dropdown">
            <ul>
              <li>
                <Link to="/login" className="under" onClick={closeProfileDropdown}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="under" onClick={closeProfileDropdown}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
