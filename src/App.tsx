import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { ContactForm } from './components/ContactForm';
import { projects, skills, socialLinks } from './data/portfolio';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark transition-colors duration-300">
        <CustomCursor />
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="text-2xl font-display font-bold gradient-text">
              Portfolio
            </a>
            <div className="flex items-center space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 pt-24">
          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Hi, I'm <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                A passionate full-stack developer crafting beautiful web experiences
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-accent-blue dark:bg-accent-purple text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) {
                    acc[skill.category] = [];
                  }
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, typeof skills>)
              ).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-xl font-display font-semibold mb-6 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
                <div className="space-y-4">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-purple transition-colors"
                    >
                      <span className="capitalize">{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App; 