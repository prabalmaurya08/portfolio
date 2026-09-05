import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Smartphone, 
  Server, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Search, 
  Download, 
  Sparkles,
  Code,
  Terminal,
  Cpu
} from 'lucide-react';
import { showcaseProjects, personalInfo } from '../../data/portfolioData';
import { Project } from '../../types';

interface ProjectsProps {
  onOpenProjectModal: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Kotlin & Compose', 'Flutter', 'Android Native', 'Firebase & Cloud'];

  const filteredProjects = useMemo(() => {
    return showcaseProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q)) ||
        (project.tagline && project.tagline.toLowerCase().includes(q)) ||
        (project.architecture && project.architecture.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Kotlin & Compose':
        return {
          icon: <Cpu className="w-3.5 h-3.5 text-indigo-500" />,
          badgeBg: 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800/60',
          accent: 'from-indigo-500 to-violet-600'
        };
      case 'Flutter':
        return {
          icon: <Smartphone className="w-3.5 h-3.5 text-cyan-500" />,
          badgeBg: 'bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border-cyan-200/60 dark:border-cyan-800/60',
          accent: 'from-cyan-500 to-blue-600'
        };
      case 'Firebase & Cloud':
        return {
          icon: <Server className="w-3.5 h-3.5 text-amber-500" />,
          badgeBg: 'bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/60',
          accent: 'from-amber-500 to-orange-600'
        };
      default:
        return {
          icon: <Layers className="w-3.5 h-3.5 text-emerald-500" />,
          badgeBg: 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
          accent: 'from-emerald-500 to-teal-600'
        };
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50/80 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-800/50 shadow-2xs">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>Real-World Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Projects & Architectures</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            12+ Android, Flutter, Jetpack Compose, MVVM, and Firebase applications engineered by Prabal Maurya with clean code and production-grade architectures.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs w-full md:w-auto">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? showcaseProjects.length
                  : showcaseProjects.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, feature, name..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No projects found matching "<strong>{searchQuery}</strong>" in {selectedCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Reset filters & view all projects
            </button>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const theme = getCategoryTheme(project.category);
              return (
                <div
                  key={project.id}
                  className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600/70 transition-all duration-300 group relative"
                >
                  {/* Top subtle gradient accent line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${theme.accent}`} />

                  <div className="p-6 space-y-4">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${theme.badgeBg}`}>
                        {theme.icon}
                        <span>{project.category}</span>
                      </div>

                      {project.badge && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {project.tagline}
                        </p>
                      )}
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Architecture Pill */}
                    {project.architecture && (
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span className="font-mono text-[10px] truncate">{project.architecture}</span>
                      </div>
                    )}

                    {/* Features list */}
                    <div className="space-y-1.5 pt-1">
                      {project.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-2 pt-4">
                      {/* Modal Inspector CTA */}
                      <button
                        type="button"
                        onClick={() => onOpenProjectModal(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-2xs group-hover:scale-[1.01]"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      {/* GitHub Link */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View GitHub repository for ${project.title}`}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                          title="View Code on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {/* APK Release Download Link */}
                      {project.releaseUrl && (
                        <a
                          href={project.releaseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download APK release for ${project.title}`}
                          className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors shadow-2xs"
                          title="Download Live APK Release"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GitHub Contribution & Community Callout */}
        <div className="mt-14 p-7 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3.5 rounded-2xl bg-indigo-600 text-white shrink-0 shadow-xs">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">
                Want to explore the source code & repositories?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                All 12+ projects are hosted openly on GitHub under <strong>@prabalmaurya08</strong>. Explore clean commit histories, PRs, and architectural setups.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs transition-all shadow-md hover:scale-105 shrink-0"
          >
            <span>Visit @prabalmaurya08 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
