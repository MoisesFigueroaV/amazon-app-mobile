import React from 'react';
import { Project } from '../types/project';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
                <div className="project-images">
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt={`Imagen del proyecto ${project.title}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;