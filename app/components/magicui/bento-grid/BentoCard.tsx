import React from 'react';

interface BentoCardProps {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
  onClick?: () => void;
  icons?: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, link, imageUrl, onClick, icons }) => {
  return (
    <div onClick={onClick} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />}
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      {icons && <div className="flex space-x-2 mt-2">{icons}</div>}
      {link && <a href={link} className="text-blue-500 mt-2 block">Learn more</a>}
    </div>
  );
};

export default BentoCard;
