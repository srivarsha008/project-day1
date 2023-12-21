// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Your journey begins with us. Plan your next adventure with our trip planner.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/plans">Travel Plans</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: trektrailblazer@gmail.com</p>
          <p>Phone: +91 1234567891</p>
        </div>
      </div>
      <div className="footer-bottom">
        <center>
        <p>&copy; 2023 Trip Planner. All Rights Reserved.</p></center>
      </div>
    </footer>
  );
};

export default Footer;
