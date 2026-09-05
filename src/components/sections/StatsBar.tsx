import React from 'react';
import { Briefcase, Building2, Smartphone, Rocket, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      number: '1+',
      label: 'Years Experience',
      sublabel: 'Mobile & Software Dev',
      icon: Briefcase,
      accent: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      number: '2+',
      label: 'Companies Worked',
      sublabel: 'Full-time & Production',
      icon: Building2,
      accent: 'text-violet-600 dark:text-violet-400'
    },
    {
      number: '1',
      label: 'App on Google Play',
      sublabel: 'Under Prabal Studios',
      icon: Smartphone,
      accent: 'text-amber-500 dark:text-amber-400'
    },
    {
      number: '12+',
      label: 'Projects Shipped',
      sublabel: 'Kotlin, Flutter & Firebase',
      icon: Rocket,
      accent: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section className="py-8 bg-white/70 dark:bg-slate-900/70 border-y border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 hover:scale-105 transition-transform duration-200 group"
              >
                <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs mb-2">
                  <Icon className={`w-4 h-4 ${stat.accent}`} />
                </div>
                <span className={`text-2xl sm:text-3xl font-black tracking-tight ${stat.accent}`}>
                  {stat.number}
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
