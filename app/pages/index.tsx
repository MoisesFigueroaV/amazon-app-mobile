import Head from 'next/head';
import Header from '../components/Header';
import ProjectCard from '../components/projectCard';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs'; 
import { Project } from '../types/project'; 
import Articles from '../components/Articles'; // Importa el componente Articles

const projects: Project[] = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Descripción del proyecto 1...',
    technologies: ['React', 'JavaScript', 'CSS'], // Añadir technologies
    images: ['/path/to/image1.jpg'], // Añadir images
    repoUrl: 'https://github.com/mi-proyecto1',
    tags: ['React', 'JavaScript', 'CSS'],
    image: '/path/to/image1.jpg', // Añadir image
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Descripción del proyecto 2...',
    technologies: ['Node.js', 'Express', 'MongoDB'], // Añadir technologies
    images: ['/path/to/image2.jpg'], // Añadir images
    repoUrl: 'https://github.com/mi-proyecto2',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: '/path/to/image2.jpg', // Añadir image
  },
  // Agrega más proyectos según sea necesario
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mi Portafolio</title>
      </Head>

      <Header />

      <main className="main-content">
        <Section id="about-me" title="About Me" description="Soy Moises Figueroa, tengo 26 años y soy estudiante de ingeniería en informática." />
        <Section id="skills" title="Skills" description="Mis tecnologías y herramientas que sé utilizar son las siguientes..." />
        <Section id="projects" title="Projects">
          <Tabs projects={projects} /> {/* Usar el componente Tabs */}
        </Section>
        <Section id="articles" title="Articles">
          <Articles /> {/* Usar el componente Articles */}
        </Section>
      </main>

      <Footer />
    </div>
  );
}