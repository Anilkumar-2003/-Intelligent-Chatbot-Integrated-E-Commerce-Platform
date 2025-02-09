import React from "react";
import '../components/Footer.css';

const Footer = () => {
  return (
    <footer>
      <footer className="footer">
        <div className="footer1">
          <div className="footer0"><h1>PANDU ShoPs</h1></div>
          <h2> Connect with us at </h2>
          <div className="social-media">
            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          </div>
        </div>
        <div className="footer3">Copyright © <h4>PANDU SHOPs</h4> 2021-2025</div>
      </footer>
    </footer>
  );
};

export default Footer;
