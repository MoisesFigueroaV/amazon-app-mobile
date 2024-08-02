import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.join(', ')}
      </div>
    </div>
  );
};

export default ProjectCard;
