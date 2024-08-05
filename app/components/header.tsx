import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';  // Asegúrate de que la ruta es correcta

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="profile">
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1 id="header-title">Hi! I'm Moises Figueroa</h1>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />
            <span>Concepcion, Chile</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;