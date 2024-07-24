import BentoCard from './components/magicui/bento-grid/BentoCard';
import BentoGrid from './components/magicui/bento-grid/BentoGrid';

const sections = [
  { id: 'about-me', title: 'About Me', description: 'A brief introduction about me.' },
  { id: 'skills', title: 'Skills', description: 'My technical skills and expertise.' },
  { id: 'projects', title: 'Projects', description: 'Projects I have worked on.' },
  { id: 'articles', title: 'Articles', description: 'Articles I have written.' },
  { id: 'notes', title: 'Notes', description: 'Notes and important points.' },
  { id: 'contacts', title: 'Contacts', description: 'How to get in touch with me.' },
  { id: 'blog', title: 'Blog', description: 'My blog posts and updates.' },
];

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', link: 'https://github.com/username/project1', imageUrl: '/path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description of Project 2', link: 'https://github.com/username/project2', imageUrl: '/path/to/image2.jpg' },
  // More projects
];

export default function HomePage() {
  return (
    <div className="p-4">
      <header>Hi, Im Moises Figueroa</header>

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
            />
          ))}
        </BentoGrid>
      </div>

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
}
