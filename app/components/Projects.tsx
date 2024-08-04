// app/components/ProjectDetail.tsx
import React from 'react';

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        images: string[];
    };
    onClose: () => void;
}

export interface Project {
    id: string; 
    title: string;
    description: string;
    technologies: string[];
    images: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
    if (!project) return null;
    
    return (
        <div className="project-detail">
            <button onClick={onClose}>Close</button>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-images">
                {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
                ))}
            </div>
            <h3>Technologies Used:</h3>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetail;
