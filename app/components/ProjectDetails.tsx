import React from 'react';
import { Project } from '../types/project';

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="modal-images">
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt={`${project.title} image ${index + 1}`} />
                    ))}
                </div>
                <ul>
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetail;
