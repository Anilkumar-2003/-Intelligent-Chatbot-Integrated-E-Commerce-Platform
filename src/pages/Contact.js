// Contact.js
import React from 'react';
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <div >
    <div className="contact-container">
      <div className="contact">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us through the following channels:</p>
        <ul>
          <li>Email: support@pandushops.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Market Street, City, Country</li>
        </ul>
      </div>

      <div className="form-container">
        <h2>Send Your Query</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Query" required></textarea>
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;