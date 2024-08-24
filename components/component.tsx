import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import '../app/styles/globals.css';

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/sendEmail/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-background px-4 py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold text-foreground" prefetch={false}>
            Portfolio
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#home" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:gap-12">
            <div className="flex-1">
              <Image
                src="https://res.cloudinary.com/dqov04wqn/image/upload/f_auto,q_auto/v1/Mis%20Archivos/dvwkbwhi0cxacehp3vwg"
                width={300}
                height={300}
                alt="Profile"
                className="mx-auto h-48 w-48 rounded-full object-cover md:h-64 md:w-64"
              />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold text-foreground">Moises Figueroa</h1>
              <p className="text-muted-foreground">Software Engineer</p>
              <p className="text-muted-foreground">
                I'm a passionate web developer with expertise in creating modern and responsive web applications.
              </p>
              <div className="flex justify-center gap-4 md:justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Download CV
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">About Me</h2>
                <p className="text-muted-foreground">
                  I am a full-stack developer with a passion for creating beautiful and functional web applications. I
                  have experience in a variety of technologies, including React, Node.js, and MongoDB.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md bg-background p-4 shadow-sm">
                    <h3 className="mb-2 text-lg font-medium text-foreground">Front-End</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>React</li>
                      <li>HTML/CSS</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-background p-4 shadow-sm">
                    <h3 className="mb-2 text-lg font-medium text-foreground">Back-End</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-background p-4 shadow-sm">
                    <h3 className="mb-2 text-lg font-medium text-foreground">Tools</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>Figma</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-background p-4 shadow-sm">
                    <h3 className="mb-2 text-lg font-medium text-foreground">Other</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Agile Methodologies</li>
                      <li>Responsive Design</li>
                      <li>SEO</li>
                      <li>Accessibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground">My Projects</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md bg-muted p-4 shadow-sm">
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Project 1"
                  className="mb-4 h-48 w-full rounded-md object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <h3 className="mb-2 text-lg font-medium text-foreground">Project 1</h3>
                <p className="text-muted-foreground">A web application built with React, Node.js, and MongoDB.</p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    View Project
                  </button>
                </div>
              </div>
              {/* Repite para otros proyectos */}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background p-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background p-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background p-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
              {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500">An error occurred. Please try again.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="http://www.linkedin.com/in/moises-figueroa-valenzuela-444954221" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/MoisFiDeveloper" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/MoisesFigueroaDeveloper" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
          </div>
          <div>&copy; 2023 Moises Figueroa. All rights reserved.</div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50" onClick={closeModal}>
          <div
            className="bg-white p-8 rounded-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-foreground">Project 1 Details</h2>
            <p className="mt-4 text-muted-foreground">
              Here you can add more details about the project, such as technologies used, challenges faced, and
              achievements.
            </p>
            <p className="mt-2 text-muted-foreground">
              Tecnologic Using: React, Node.js, MongoDB.
            </p>
            <Image
              src=""
              width={300}
              height={300}
              alt="Profile"
              className="mx-auto h-48 w-48 object-cover md:h-64 md:w-64"
            />
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </div>
            <a
              href="#"
              className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
