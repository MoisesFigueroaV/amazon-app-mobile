// app/pages/_app.tsx
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Tabs from '../components/Tabs'; 
import { Project } from '../types/project'; 

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

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <header>
        </header>
        <main>
          <h1>Mis Proyectos</h1>
          <Tabs projects={projects} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;