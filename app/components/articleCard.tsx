// app/components/ArticleCard.tsx
import React from 'react';

interface ArticleCardProps {
    title: string;
    description: string;
    link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, link }) => {
    return (
        <div className="article-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default ArticleCard;
