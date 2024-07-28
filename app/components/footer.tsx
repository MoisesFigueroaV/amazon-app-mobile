import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Contact</p>
      <div className="social-icons">
        <FaInstagram />
        <FaTwitter />
        <FaEnvelope />
      </div>
      <p>&copy; 2024 Moises Figueroa. All rights reserved.</p>
    </footer>
  );
}
