import React, { useEffect } from 'react';
import { X, CheckCircle2, Github, ExternalLink, Smartphone, Server, Layers, Cpu, Download, Terminal, Sparkles } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getCategoryIcon = () => {
    switch (project.category) {
      case 'Kotlin & Compose':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'Flutter':
        return <Smartphone className="w-5 h-5 text-cyan-500" />;
      case 'Firebase & Cloud':
        return <Server className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div
      id={`project-modal-${project.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700/60 mt-0.5">
              {getCategoryIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {project.badge}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
              {project.tagline && (
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>
          <button
            id="close-project-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-6 scrollbar-thin">
          {/* Architecture Overview */}
          {project.architecture && (
            <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-start gap-2.5">
              <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Architecture Paradigm: </span>
                <span className="font-mono text-indigo-700 dark:text-indigo-300">{project.architecture}</span>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              Project Overview
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Key Engineering Features
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
              Technologies & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex flex-wrap items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-2xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}

            {project.releaseUrl && (
              <a
                href={project.releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK Release</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
