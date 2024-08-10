"use client";

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Section from './components/Section';
import ProjectCard from './components/projectCard'; 
import ProjectModal from './components/Modal'; 
import ArticleDetail from './components/ArticlesDetails'; 
import Footer from './components/Footer';
import { Project } from './types/project';
import { useTheme } from 'next-themes';

const HomePage: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const toggleDarkMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) return null;

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
    ];

    return (
        <div className={`container ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <Header />
            <SocialMedia />
            <main className="main-content">
                <Section 
                    id="about-me"
                    title="About Me"
                    description="Soy Moises Figueroa, tengo 26 años y soy estudiante de ingeniería en informática."
                    titleClassName="section-title"
                    descriptionClassName="section-description"
                />
                <Section 
                    id="skills"
                    title="Skills"
                    description="Mis tecnologías y herramientas que sé utilizar son las siguientes:"
                    titleClassName="section-title"
                    descriptionClassName="section-description"
                />
                <Section id="projects" title="Projects" titleClassName="section-title">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            onClick={() => handleProjectClick(project)}
                            titleClassName="project-card-title"
                            descriptionClassName="project-card-description"
                        />
                    ))}
                </Section>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={handleCloseModal} />
                )}
                <Section id="articles" title="Articles" titleClassName="section-title">
                    <ArticleDetail
                        article={{ id: '1', title: 'Artículo 1', content: 'Descripción del artículo 1...' }}
                        onClose={() => {}}
                        titleClassName="article-title"
                        contentClassName="article-content"
                    />
                    <ArticleDetail
                        article={{ id: '2', title: 'Artículo 2', content: 'Descripción del artículo 2...' }}
                        onClose={() => {}}
                        titleClassName="article-title"
                        contentClassName="article-content"
                    />
                </Section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
