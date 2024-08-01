'use client'; // Asegura que el componente se renderice del lado del cliente

import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <h3>Contact</h3>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p className="footer-text">© 2024 Moisés Figueroa</p>
    </footer>
  );
}


