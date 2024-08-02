// app/components/Header.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
    onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode }) => {
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
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Concepcion, Chile</span>
                    </div>
                </div>
            </div>
            <DarkModeToggle onToggleDarkMode={onToggleDarkMode} />
        </header>
    );
};

export default Header;
