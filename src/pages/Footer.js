// Footer.js
import React from 'react';
import styles from '../styles/Footer.css'; // Import CSS module

const Footer = () => {
  return (
    <footer>
      <p>Contact: your@email.com</p>
      <div>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        {/* Add other social media links */}
      </div>
    </footer>
  );
}

export default Footer;
