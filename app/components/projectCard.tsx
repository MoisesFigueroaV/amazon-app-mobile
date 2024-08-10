import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    onClick: () => void;
    titleClassName?: string;
    descriptionClassName?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, onClick, titleClassName, descriptionClassName }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <h3 className={titleClassName}>{title}</h3>
            <p className={descriptionClassName}>{description}</p>
            <ul>
                {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;
