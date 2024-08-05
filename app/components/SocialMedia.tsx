import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GiMac10, GiMailShirt } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

const SocialMedia: React.FC = () => {
    return (
        <div className="social-media">
            <a href="https://instagram.com/moises" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://twitter.com/moises" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://github.com/moises" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
            </a>
        </div>
    );
};

export default SocialMedia;