import React from 'react';

interface ArticleDetailProps {
    article: {
        id: string;
        title: string;
        content: string;
    };
    onClose: () => void;
    titleClassName?: string;
    contentClassName?: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onClose, titleClassName, contentClassName }) => {
    return (
        <div className="article-detail">
            <h3 className={titleClassName}>{article.title}</h3>
            <p className={contentClassName}>{article.content}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ArticleDetail;
