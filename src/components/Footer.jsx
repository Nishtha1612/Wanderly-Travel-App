import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Wanderly Travel. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.facebook.com" className="footer-link">Facebook</a>
          <a href="https://www.instagram.com" className="footer-link">Instagram</a>
          <a href="https://www.twitter.com" className="footer-link">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
