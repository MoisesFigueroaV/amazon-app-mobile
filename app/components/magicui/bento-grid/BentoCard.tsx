// app/components/magicui/bento-grid/BentoCard.tsx
import React from 'react';

interface BentoCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, link, imageUrl }) => {
  return (
    <a href={link} className="block overflow-hidden rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default BentoCard;
