'use client'; // Esta línea asegura que el componente sea del lado del cliente

interface projectCardProps {
  type: string;
  name: string;
  description: string;
  url: string;
}

export default function projectCard({ type, name, description, url }: projectCardProps) {
  return (
    <div className="project-card" onClick={() => window.open(url, "_blank")}>
      <p>Type: {type}</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
