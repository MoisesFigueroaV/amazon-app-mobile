"use client";

import React, { useState } from 'react';
import BentoCard from './components/magicui/bento-grid/BentoCard';
import BentoGrid from './components/magicui/bento-grid/BentoGrid';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icons?: React.ReactNode;
}

const sections: Section[] = [
  { id: 'about-me', title: 'About Me', description: 'Mi nombre es Moises Figueroa, tengo 26 años y soy estudiante de ingeniería en informática.' },
  { id: 'skills', title: 'Skills', description: 'My technical skills and expertise.', icons: (
    <>
      <FaHtml5 className="text-3xl text-red-600" />
      <FaCss3Alt className="text-3xl text-blue-600" />
      <FaJs className="text-3xl text-yellow-500" />
      <FaReact className="text-3xl text-blue-400" />
      <FaNode className="text-3xl text-green-600" />
    </>
  ) },
  { id: 'projects', title: 'Projects', description: 'Projects I have worked on.' },
  { id: 'articles', title: 'Articles', description: 'Articles I have written.' },
  { id: 'notes', title: 'Notes', description: 'Notes and important points.' },
  { id: 'contacts', title: 'Contacts', description: 'How to get in touch with me.' },
  { id: 'blog', title: 'Blog', description: 'My blog posts and updates.' },
];

const projects: Project[] = [
  { title: 'Project 1', description: 'Description of Project 1', link: 'https://github.com/username/project1', imageUrl: '/path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description of Project 2', link: 'https://github.com/username/project2', imageUrl: '/path/to/image2.jpg' },
  // More projects
];

const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="home-page">
      <header className="header">Hi, Im Moises Figueroa</header>

      <BentoGrid>
        {sections.map(section => (
          <BentoCard
            key={section.id}
            title={section.title}
            description={section.description}
            link={`#${section.id}`}
            icons={section.icons}
          />
        ))}
      </BentoGrid>

      <div id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <BentoGrid>
          {projects.map((project, index) => (
            <BentoCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </BentoGrid>
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">{selectedProject.title}</h3>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="modal-image" />
            <p className="modal-description">{selectedProject.description}</p>
            <a href={selectedProject.link} className="modal-link" target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
            <button onClick={handleCloseModal} className="modal-close-button">
              Close
            </button>
          </div>
        </div>
      )}

      <div id="articles" className="articles-section">
        <h2 className="section-title">Articles</h2>
        <p>Articles I have written.</p>
      </div>

      <div id="notes" className="notes-section">
        <h2 className="section-title">Notes</h2>
        <p>Notes and important points.</p>
      </div>

      <div id="blog" className="blog-section">
        <h2 className="section-title">Blog</h2>
        <p>My blog posts and updates.</p>
      </div>
    </div>
  );
};

export default HomePage;
