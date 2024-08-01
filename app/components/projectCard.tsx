'use client'; // Esta línea asegura que el componente sea del lado del cliente

interface ProjectCardProps {
  type: string;
  name: string;
  description: string;
  url: string;
}

export default function ProjectCard({ type, name, description, url }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={() => window.open(url, "_blank")}>
      <div className="project-card-header">
        <span className="project-card-type">{type}</span>
      </div>
      <h3 className="project-card-title">{name}</h3>
      <p className="project-card-description">{description}</p>
    </div>
  );
}
