// app/pages/_app.tsx
import React from 'react';
import Tabs from '../components/Tabs'; 
import { Project } from '../types/project'; 

const projects: Project[] = [
  {
    id: '1', // Asegúrate de incluir 'id'
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    technologies: ['React', 'JavaScript', 'CSS'],
    images: ['/path/to/image1.jpg'],
    repoUrl: 'https://github.com/usuario/proyecto1',
    tags: ['React', 'JavaScript', 'CSS'],
    image: '/path/to/image1.jpg', // Añadir esta línea
  },
  {
    id: '2', // Asegúrate de incluir 'id'
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    images: ['/path/to/image2.jpg'],
    repoUrl: 'https://github.com/usuario/proyecto2',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: '/path/to/image2.jpg', // Añadir esta línea
  },
  // Agrega más proyectos según sea necesario
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Mis Proyectos</h1>
      <Tabs projects={projects} />
    </div>
  );
};

export default App;