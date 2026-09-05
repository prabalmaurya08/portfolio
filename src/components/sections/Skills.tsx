import React, { useState } from 'react';
import { Cpu, Check } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobile', 'Backend & Cloud', 'Languages', 'Web & Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-800/50">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-indigo-600 dark:text-indigo-400">Technology Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Languages, frameworks, mobile SDKs, and cloud tools I use to build scalable software applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-200 group shadow-2xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  {skill.level && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-slate-800 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-slate-700">
                      <Check className="w-2.5 h-2.5 text-indigo-500" />
                      {skill.level}
                    </span>
                  )}
                </div>

                <h3 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 block mt-0.5">
                  {skill.category}
                </span>

                {skill.description && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-normal line-clamp-2">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
