import React from 'react';
import Tabs from '../components/tabs';
import { Project } from '../components/types'; // Importa desde el directorio raíz

const projects: Project[] = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    image: '/path/to/image1.jpg',
    repoUrl: 'https://github.com/usuario/proyecto1',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    image: '/path/to/image2.jpg',
    repoUrl: 'https://github.com/usuario/proyecto2',
    tags: ['Node.js', 'Express', 'MongoDB'],
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
