// app/components/DarkModeToggle.tsx
import React from 'react';

interface DarkModeToggleProps {
    onToggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onToggleDarkMode }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        onToggleDarkMode();
    };

    return (
        <button className="dark-mode-toggle" onClick={handleToggle}>
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default DarkModeToggle;
