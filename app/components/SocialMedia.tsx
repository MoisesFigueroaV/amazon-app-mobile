// app/components/SocialMedia.tsx
import React from 'react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { GiMac10, GiMailbox, GiMailShirt } from 'react-icons/gi';
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
            <a href="http://" target="_bank" rel="noopener noreferrer"><GiMailbox />
            </ a>
        </div>
    );
};

export default SocialMedia;
