"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Section from './components/Section';
import ProjectCard from './components/projectCard';
import ProjectDetail from './components/ProjectDetails';
import ArticleCard from './components/ArticleCard';
import Footer from './components/Footer';
import { Project } from './types/project';

const HomePage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseDetail = () => {
        setSelectedProject(null);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const projects: Project[] = [
        {
            id: '1',
            title: 'Project 1',
            description: 'Descripción detallada del proyecto 1...',
            technologies: ['React', 'TypeScript', 'Next.js'],
            images: ['/path/to/image1.jpg', '/path/to/image2.jpg']
        },
        {
            id: '2',
            title: 'Project 2',
            description: 'Descripción detallada del proyecto 2...',
            technologies: ['React Native', 'TypeScript'],
            images: ['/path/to/image3.jpg', '/path/to/image4.jpg']
        },
        // Agrega más proyectos según sea necesario
    ];

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <Header onToggleDarkMode={toggleDarkMode} />
            <SocialMedia />
            <main className="main-content">
                <Section
                    id="about-me"
                    title="About Me"
                    description="Soy Moises Figueroa, tengo 26 años y soy estudiante de ingeniería en informática."
                />
                <Section
                    id="skills"
                    title="Skills"
                    description="Mis tecnologías y herramientas que sé utilizar son las siguientes:"
                />
                <Section id="projects" title="Projects">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </Section>
                {selectedProject && (
                    <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
                )}
                <Section id="articles" title="Articles">
                    <ArticleCard
                        title="Artículo 1"
                        description="Descripción del artículo 1..."
                        link="https://example.com/article1"
                    />
                    <ArticleCard
                        title="Artículo 2"
                        description="Descripción del artículo 2..."
                        link="https://example.com/article2"
                    />
                    {/* Agrega más artículos según sea necesario */}
                </Section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
