'use client'; // Esta línea asegura que el componente sea del lado del cliente

interface articleCardProps {
  title: string;
  description: string;
}

export default function articleCard({ title, description }: articleCardProps) {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Learn more...</a>
    </div>
  );
}
