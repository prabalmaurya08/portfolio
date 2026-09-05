import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'published-app', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Live Apps (2)', href: '#published-app', id: 'published-app', highlight: true },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Developer Brand Identity with Photo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Prabal — Home"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs group-hover:scale-105 transition-transform bg-slate-100 dark:bg-slate-800 shrink-0">
              <img
                src="/profile.png"
                alt="Prabal Maurya"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
                Prabal <span className="font-normal text-slate-400 dark:text-slate-500">Maurya</span>
              </span>
              <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all duration-150 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : link.highlight
                      ? 'text-emerald-700 dark:text-emerald-300 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />

            <a
              id="navbar-resume-btn"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 mt-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-lg">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-xs font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                      : link.highlight
                      ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-1 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
