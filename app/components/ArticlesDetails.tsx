import React from 'react';

interface Article {
    id: string;
    title: string;
    content: string;
}

interface ArticleDetailProps {
    article: Article | undefined;
    onClose: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onClose }) => {
    if (!article) return null;

    return (
        <div className="article-detail-overlay" onClick={onClose}>
            <div className="article-detail-content" onClick={(e) => e.stopPropagation()}>
                <button className="article-detail-close" onClick={onClose}>X</button>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
            </div>
        </div>
    );
};

export default ArticleDetail;