import Head from 'next/head';
import Header from '../components/header';
import ArticleCard from '../components/articleCard';
import Section from '../components/section';
import Footer from '../components/footer';
import Tabs from '../components/tabs'; 
import { Project } from '../components/types'; 

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Descripción del proyecto 1...',
    image: '/path/to/image1.jpg',
    repoUrl: 'https://github.com/mi-proyecto1',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Project 2',
    description: 'Descripción del proyecto 2...',
    image: '/path/to/image2.jpg',
    repoUrl: 'https://github.com/mi-proyecto2',
    tags: ['Node.js', 'Express', 'MongoDB'],
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
        <Section id="skills" title="Skills" description="Mis tecnologías y herramientas que sé utilizar son las siguientes:" />
        <Section id="projects" title="Projects">
          <Tabs projects={projects} /> {/* Usar el componente Tabs */}
        </Section>
        <Section id="articles" title="Articles">
          <ArticleCard title="Artículo 1" description="Descripción del artículo..." />
          <ArticleCard title="Artículo 2" description="Descripción del artículo..." />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
