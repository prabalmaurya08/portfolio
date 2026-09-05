import React from 'react';
import { GraduationCap, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-800/50">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & <span className="text-indigo-600 dark:text-indigo-400">Qualifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Formal Computer Science engineering training providing strong fundamentals in algorithms, software systems, and mobile architectures.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200/60 dark:border-indigo-800/60">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
                    <CheckCircle className="w-3 h-3" />
                    <span>{edu.status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                {edu.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                <span>Academic Period: {edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
