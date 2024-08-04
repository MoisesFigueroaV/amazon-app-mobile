// components/Articles.tsx
import React, { useState } from 'react';
import ArticleDetail from './ArticlesDetails';

const Articles: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

    const articles = [
        { id: 'article1', title: 'Artículo 1', content: 'Contenido del Artículo 1' },
        { id: 'article2', title: 'Artículo 2', content: 'Contenido del Artículo 2' },
    ];

    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id} onClick={() => setSelectedArticle(article.id)}>
                        {article.title}
                    </li>
                ))}
            </ul>
            {selectedArticle && (
                <ArticleDetail
                    article={articles.find((article) => article.id === selectedArticle)}
                    onClose={() => setSelectedArticle(null)}
                />
            )}
        </div>
    );
};

export default Articles;
