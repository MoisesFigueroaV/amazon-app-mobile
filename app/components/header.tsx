'use client'; // Asegura que el componente sea del lado del cliente
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="profile">
        <div className="profile-picture"></div>
        <div className="profile-info">
          <h1 className="tittle-present">Hi! I'm Moises Figueroa</h1>
          <p><FaMapMarkerAlt className="tittle-location" />Concepcion, Chile</p>
        </div>
      </div>
    </header>
  );
}
