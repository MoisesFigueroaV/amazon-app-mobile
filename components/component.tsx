import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';

import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import "../app/styles/globals.css";

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [projectDescription, setProjectDescription] = useState<string | null>(null);
  const [projectRepoUrl, setProjectRepoUrl] = useState<string | null>(null);

  const openModal = (images: string[], index: number, description: string, repoUrl: string) => {
    setProjectImages(images); 
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setProjectDescription(description);
    setProjectRepoUrl(repoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    setSelectedImage(projectImages[(currentIndex + 1) % projectImages.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
    setSelectedImage(projectImages[(currentIndex - 1 + projectImages.length) % projectImages.length]);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Moises Esteban Figueroa Valenzuela.pdf';
    link.download = 'Moises Esteban Figueroa Valenzuela.pdf'; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-background px-4 py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold text-foreground" prefetch={false}>
            {/* Logo o nombre */}
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#home" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>Home</Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>Acerca de mi</Link>
            <Link href="#projects" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>Proyectos</Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:underline" prefetch={false}>Contactame</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:gap-12">
            <div className="flex-1">
              <Image src="https://res.cloudinary.com/dqov04wqn/image/upload/f_auto,q_auto/v1/Mis%20Archivos/dvwkbwhi0cxacehp3vwg" width={300} height={300} alt="Profile" className="mx-auto h-48 w-48 rounded-full object-cover md:h-64 md:w-64" />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold text-foreground">Moises Figueroa</h1>
              <p className="text-muted-foreground">Software Engineer</p>
              <p className="text-muted-foreground">Soy un desarrollador web apasionado con experiencia en la creación de contenido moderno y aplicaciones web responsivas.</p>
              <div className="flex justify-center gap-4 md:justify-start">
              <Link
                href="#"
                onClick={downloadCV}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Descargar CV
              </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2" prefetch={false}>Contactame</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Acerca de mi</h2>
                <p className="text-muted-foreground">"Soy un desarrollador full-stack con una fuerte pasión por construir aplicaciones web funcionales y visualmente atractivas. Me especializo en crear soluciones eficientes y escalables que ofrecen una experiencia de usuario fluida, utilizando tecnologías modernas y buenas prácticas de desarrollo. Siempre busco aprender y aplicar nuevos enfoques para resolver problemas complejos y mejorar la calidad de mis proyectos."</p>
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
                    <h3 className="mb-2 text-lg font-medium text-foreground">Herramientas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>Figma</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-background p-4 shadow-sm">
                    <h3 className="mb-2 text-lg font-medium text-foreground">Otros</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Metodologías de trabajo</li>
                      <li>Diseño Responsivo</li>
                      <li>SEO</li>
                      <li>Accesibilidad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Mis Proyectos</h2>
            <div className="projects-grid">
              {/* Proyecto 1 */}
              <div className="rounded-md bg-muted p-4 shadow-sm">
                <Image
                  src="https://res.cloudinary.com/dqov04wqn/image/upload/v1731634253/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/l74oea7bbcu9x4hjbemj.jpg"
                  width={400}
                  height={300}
                  alt="Project 1"
                  className="mb-4 h-48 w-full rounded-md object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <h3 className="mb-2 text-lg font-medium text-foreground">Proyecto Web</h3>
                <p className="text-muted-foreground">
                  Esta aplicación fue construida con Next.js para el Front-End, SupaBase para la base de datos y Node.js para el Back-End.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Button
                    onClick={() =>
                      openModal(
                        [   
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731634253/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/l74oea7bbcu9x4hjbemj.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683053/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/nopcd4anethlkwspt8uq.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683492/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/hbj7mzwdcjmcvlwhmlwq.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683598/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/m81zweh16kjmyv8h2ti5.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683750/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/zwxogx3ldqlawqamuvzs.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683863/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/r3goaz5k3ubka4f2wfhc.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683927/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/sufs2lnmmzeicyhm4hjp.jpg",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731683986/Mis%20Archivos/Imagenes%20de%20proyectos/Layamon/eqhp9lhwgcqftpmxnsjg.jpg"
                        ],
                        0,
                        "Este proyecto es una web semi-estatica para presentar los servicios de asesoria web. Ademas de ofrecer servicios de desarrollo web y apps moviles.",
                        "https://github.com/MoisesFigueroaDeveloper/LayamonSpace"
                      )
                    }
                  >
                    Ver más
                  </Button>
                </div>
              </div>
              {/* Añade más proyectos aquí */}
               {/* Proyecto 1 */}
               <div className="rounded-md bg-muted p-4 shadow-sm">
                <Image
                  src="https://res.cloudinary.com/dqov04wqn/image/upload/v1731701434/Mis%20Archivos/Imagenes%20de%20proyectos/DashBoard%20Sindicato/s3vz3otbb3pfje3yhded.png"
                  width={400}
                  height={300}
                  alt="Project 1"
                  className="mb-4 h-48 w-full rounded-md object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <h3 className="mb-2 text-lg font-medium text-foreground">Proyecto Web</h3>
                <p className="text-muted-foreground">
                  Este proyecto esta hecho con Next.js, Express.js y como motor de base de datos Postgres DB.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Button
                    onClick={() =>
                      openModal(
                        [   
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731701434/Mis%20Archivos/Imagenes%20de%20proyectos/DashBoard%20Sindicato/s3vz3otbb3pfje3yhded.png",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731701434/Mis%20Archivos/Imagenes%20de%20proyectos/DashBoard%20Sindicato/yxsogwsbrokgdxd9rxvc.png",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731701434/Mis%20Archivos/Imagenes%20de%20proyectos/DashBoard%20Sindicato/f3hyiepwh1ioqv6frrb9.png",
                            "https://res.cloudinary.com/dqov04wqn/image/upload/v1731701434/Mis%20Archivos/Imagenes%20de%20proyectos/DashBoard%20Sindicato/ogwbwsgmzwvat4ukbcxd.png",
                            
                        ],
                        0,
                        "Este proyecto va dirigido a la asociacion de trabajadoras y trabajadores de la salud que trabajen en establecimientos dependientes del Ministerio de Salud, este proyecto es para administrar los inscritos a la asociacion y poder administrar distintos aspectos del sindicato",
                        "En este proyecto se debe adminstra los usuarios registrado por el adminstrador y las credenciales de los usuarios que ingresaran ademas de adminstras eventos, beneficios, canales de comunicacion y pagos.",
                        
                      )
                    }
                  >
                    Ver más
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-xl font-bold text-black">X</button>
              <div className="flex justify-center">
                <Image
                  src={selectedImage!}
                  alt="Selected project image"
                  width={800}
                  height={600}
                  className="object-contain"
                />
              </div>
              {projectDescription && (
                <div className="mt-4">
                  <p className="text-muted-foreground">{projectDescription}</p>
                  {projectRepoUrl && (
                    <div className="mt-4 text-center">
                      <a href={projectRepoUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="text-sm" variant="outline">Ver en GitHub</Button>
                      </a>
                    </div>
                  )}
                </div>
              )}
              <div className="flex justify-between mt-4">
                <button onClick={prevImage} className="text-lg text-foreground hover:text-primary">Anterior</button>
                <button onClick={nextImage} className="text-lg text-foreground hover:text-primary">Siguiente</button>
              </div>
            </div>
          </div>
        )}

        {/* Contact */}
<section id="contact" className="bg-muted py-12 md:py-20">
  <div className="container mx-auto px-4">
    <h2 className="mb-8 text-2xl font-bold text-foreground text-center">
      Contáctame
    </h2>
    <form
      action="https://formsubmit.co/e3e17f72ef87fb4fb21ab1c17ee2c7d9"
      method="POST"
      className="mx-auto max-w-md space-y-4"
    >
      {/* Hidden Inputs */}
      <Input type="hidden" name="_next" value="http://localhost:3000" />
      <Input type="hidden" name="_captcha" value="false" />

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Nombre
        </label>
        <Input
          id="name"
          type="text"
          name="name" 
          placeholder="Your name"
          className="w-full rounded-md border border-input bg-background p-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full rounded-md border border-input bg-background p-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message" 
          rows={4}
          placeholder="Your message"
          className="w-full rounded-md border border-input bg-background p-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <Button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Enviar mensaje
      </Button>
    </form>

    {/* Redes sociales */}
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://x.com/MoisFiDeveloper" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/moises-figueroa-valenzuela-444954221" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/MoisesFigueroaDeveloper" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Moises Figueroa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
