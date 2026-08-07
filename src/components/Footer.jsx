import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="logo">521 <span>FRAMEWORK</span></h2>
          <p>Seoul, Korea<br/>521framework@gmail.com<br/>010-2315-1635</p>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.instagram.com/521framework/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} 521 FRAMEWORK. All rights reserved.</p>
          <p className="footer-rep">대표자 박상화</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
