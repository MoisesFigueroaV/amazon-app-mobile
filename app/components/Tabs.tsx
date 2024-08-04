// app/components/tabs.tsx
import React from 'react';
import { Project } from '../types/project'; 

interface TabsProps {
  projects: Project[];
}

const Tabs: React.FC<TabsProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-images">
              {project.images.map((image, index) => (
                  <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
              ))}
          </div>
          <a href={project.repoUrl}>Ver Repositorio</a>
          <p>{project.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;