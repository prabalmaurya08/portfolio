import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-800/50">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Professional track record engineering cross-platform Flutter applications and native Android modules across dynamic tech teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-400 to-slate-200 dark:to-slate-800" />

          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative sm:pl-16">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-3 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-xs items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                </div>

                {/* Experience Box */}
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-600/60 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/70 dark:border-slate-700/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <Calendar className="w-3 h-3 text-indigo-500" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="py-4 space-y-2">
                    {exp.description.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-[11px] font-medium rounded-lg bg-indigo-50 dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
