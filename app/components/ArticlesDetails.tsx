interface ArticleDetailProps {
    article: {
      id: string;
      title: string;
      content: string;
    };
    onClose: () => void;
  }
  
  const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onClose }) => {
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default ArticleDetail;