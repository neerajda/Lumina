import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Lumina</div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Lumina. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;