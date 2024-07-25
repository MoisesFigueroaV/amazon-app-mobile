"use client";

import React, { useState } from 'react';
import BentoCard from './components/magicui/bento-grid/BentoCard';
import BentoGrid from './components/magicui/bento-grid/BentoGrid';

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
}

const sections: Section[] = [
  { id: 'about-me', title: 'About Me', description: 'A brief introduction about me.' },
  { id: 'skills', title: 'Skills', description: 'My technical skills and expertise.' },
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
    <div className="p-4">
      <header className="mb-8">Hi, Im Moises Figueroa</header>

      <BentoGrid>
        {sections.map(section => (
          <BentoCard
            key={section.id}
            title={section.title}
            description={section.description}
            link={`#${section.id}`}
          />
        ))}
      </BentoGrid>

      <div id="projects" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="mb-4" />
            <p className="mb-4">{selectedProject.description}</p>
            <a href={selectedProject.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
            <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      <div id="articles" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Articles</h2>
        <p>Articles I have written.</p>
      </div>

      <div id="notes" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <p>Notes and important points.</p>
      </div>

      <div id="blog" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        <p>My blog posts and updates.</p>
      </div>

      <div className="text-center mt-8">
        <a href="#top" className="text-blue-500 hover:underline">Back to top</a>
      </div>
    </div>
  );
};

export default HomePage;
