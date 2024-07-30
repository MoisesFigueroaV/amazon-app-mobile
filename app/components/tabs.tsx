import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from './types'; // Importa desde el directorio raíz
import './Tabs.css';

interface TabsProps {
  projects: Project[];
}

const Tabs: React.FC<TabsProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tabs">
      <ul className="tab-list">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {project.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`tab-panel ${activeTab === index ? 'active' : ''}`}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Image src={project.image} alt={project.title} width={600} height={400} />
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Ver Repositorio
            </a>
            <div className="tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
