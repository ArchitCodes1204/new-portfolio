export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
  proficiency: number;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js.',
    image: '/project1.jpg',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-1',
    demoUrl: 'https://project-1.demo.com',
  },
  // Add more projects here
];

export const skills: Skill[] = [
  {
    name: 'React',
    category: 'frontend',
    proficiency: 90,
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 85,
  },
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 80,
  },
  // Add more skills here
];

export const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
}; 