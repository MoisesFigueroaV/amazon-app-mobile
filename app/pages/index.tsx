import Head from 'next/head';
import Header from '../components/header';
import Section from '../components/section';
import Footer from '../components/footer';
import ProjectCard from '../components/projectCard';
import ArticleCard from '../components/articleCard';

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
          <ProjectCard type="Web Development" name="Project 1" description="Descripción del proyecto..." url="https://github.com/mi-proyecto" />
          <ProjectCard type="Mobile App" name="Project 2" description="Descripción del proyecto..." url="https://github.com/mi-proyecto" />
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
