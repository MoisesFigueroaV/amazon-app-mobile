// app/types/project.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  repoUrl: string; 
  tags: string[]; 
  image: string;
}