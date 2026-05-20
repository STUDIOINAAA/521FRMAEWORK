import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="logo">521 <span>FRAMEWORK</span></h2>
          <p>Seoul, Korea<br/>hello@521framework.com<br/>+82 (2) 123-4567</p>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Vimeo</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} 521 FRAMEWORK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
