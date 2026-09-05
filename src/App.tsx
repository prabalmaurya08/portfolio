import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsBar } from './components/sections/StatsBar';
import { PublishedAppSection } from './components/sections/PublishedAppSection';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/ui/ProjectModal';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('prabal_theme');
      if (saved !== null) return saved === 'dark';
      // Default to dark mode for developer vibe, but fully responsive to toggle
      return true;
    }
    return true;
  });

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('prabal_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('prabal_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200 font-sans">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Developer Portfolio Sections */}
      <main id="main-content" className="relative">
        <Hero />
        <StatsBar />
        <PublishedAppSection />
        <About />
        <Skills />
        <Experience />
        <Projects onOpenProjectModal={(proj) => setActiveProject(proj)} />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Inspector Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
