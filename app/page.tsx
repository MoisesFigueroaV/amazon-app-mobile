"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Section from './components/Section';
import ProjectCard from './components/projectCard'; 
import ProjectModal from './components/Modal'; 
import ArticleDetail from './components/ArticlesDetails'; 
import Footer from './components/Footer';
import { Project } from './types/project';

const HomePage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const projects: Project[] = [
        {
            id: '1',
            title: 'Proyecto 1',
            description: 'Descripción del Proyecto 1',
            technologies: ['React', 'JavaScript', 'CSS'],
            images: ['/path/to/image1.jpg'],
            repoUrl: 'https://github.com/usuario/proyecto1',
            tags: ['React', 'JavaScript', 'CSS'],
            image: '/path/to/image1.jpg',
        },
        {
            id: '2',
            title: 'Proyecto 2',
            description: 'Descripción del Proyecto 2',
            technologies: ['Node.js', 'Express', 'MongoDB'],
            images: ['/path/to/image2.jpg'],
            repoUrl: 'https://github.com/usuario/proyecto2',
            tags: ['Node.js', 'Express', 'MongoDB'],
            image: '/path/to/image2.jpg',
        },
        // Agrega más proyectos según sea necesario
    ];

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <Header />
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
                            technologies={project.technologies}  // Asegúrate de pasar `technologies`
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </Section>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={handleCloseModal} />
                )}
                <Section id="articles" title="Articles">
                    <ArticleDetail
                        article={{ id: '1', title: 'Artículo 1', content: 'Descripción del artículo 1...' }}
                        onClose={() => {}}
                    />
                    <ArticleDetail
                        article={{ id: '2', title: 'Artículo 2', content: 'Descripción del artículo 2...' }}
                        onClose={() => {}}
                    />
                    {/* Agrega más artículos según sea necesario */}
                </Section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;