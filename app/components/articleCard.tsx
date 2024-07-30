import React from 'react';

interface ArticleCardProps {
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description }) => {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ArticleCard;
