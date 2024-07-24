// app/page.tsx
import BentoGrid from '../components/magicui/bento-grid/BentoGrid';
import BentoCard from '../components/magicui/bento-grid/BentoCard';

export default function HomePage() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      link: 'https://github.com/username/project1',
      imageUrl: '/path/to/image1.jpg',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">My Portfolio</h1>
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
  );
}
