// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      Built with 💻 by{' '}
      <a
        href="https://stanleyowarieta.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Stanley Owarieta
      </a>
    </footer>
  );
};

export default Footer;
