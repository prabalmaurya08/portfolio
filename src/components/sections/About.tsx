import React from 'react';
import { User, Code2, Smartphone, Server, Download, CheckCircle2, Award, BookOpen, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Mobile Architecture & UI',
      desc: 'Crafting responsive, 60fps Flutter and Android user interfaces with clean state management, modular widget trees, and Material 3 design systems.',
      icon: Smartphone
    },
    {
      title: 'Java Backend & API Services',
      desc: 'Building high-performance Java backend REST endpoints, handling recurring business logic, database transactions, and real-time Firebase/Cloud pipelines.',
      icon: Server
    },
    {
      title: 'Clean Code & Engineering',
      desc: 'Applying SOLID principles, structured separation of layers (Data, Domain, Presentation), and thorough testing for maintainable production codebases.',
      icon: Code2
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-800/50">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Developer building <span className="text-indigo-600 dark:text-indigo-400">clean, reliable mobile & backend systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Portrait & Executive Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 p-6 shadow-lg space-y-5">
              {/* Photo Frame */}
              <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-900/60 shadow-md group bg-slate-200 dark:bg-slate-800">
                <img
                  src="/profile.png"
                  alt="Prabal Maurya"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Identity & Status */}
              <div className="text-center space-y-1">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Prabal Maurya
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Android & Software Developer
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>

              {/* Badges List */}
              <div className="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-[11px]">
                    Google Play Publisher: <strong>Prabal Studios</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/70">
                  <Smartphone className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-[11px]">
                    Live Apps: <strong>SubCare</strong> & <strong>KnowFlakes</strong>
                  </span>
                </div>
              </div>

              {/* Direct LinkedIn Profile Link Button */}
              <a
                id="about-linkedin-btn"
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Personal Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I'm <strong>Prabal Maurya</strong>, a Software Developer based in Lucknow, India. I graduated with a Bachelor of Technology in Computer Science and Engineering from Babu Banarasi Das University (2021–2025).
              </p>
              <p>
                My engineering focus centers on building cross-platform <strong>Flutter</strong> mobile applications, native <strong>Android (Kotlin)</strong> apps, and robust <strong>Java backend services</strong>. I have hands-on experience across professional software teams developing production features, designing REST APIs, and integrating scalable cloud architectures.
              </p>
              <p>
                In addition to my engineering work, I publish mobile applications on the Google Play Store under my developer brand, <strong>Prabal Studios</strong>. My live apps include <strong>SubCare</strong> (a smart subscription management and expense tracker with Java backend) and <strong>KnowFlakes</strong> (an interactive learning and quiz platform). This real-world publishing journey gives me deep end-to-end expertise in Play Console compliance, app release cycles, bundle optimization, and user feedback loops.
              </p>
            </div>

            {/* Quick stats / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                <p className="text-xs text-slate-500 dark:text-slate-400">Education</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">B.Tech in CSE</p>
                <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">2021–2025</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                <p className="text-xs text-slate-500 dark:text-slate-400">Primary Stack</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Flutter & Java</p>
                <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">Dart, Kotlin, REST</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 col-span-2 sm:col-span-1">
                <p className="text-xs text-slate-500 dark:text-slate-400">Play Store Brand</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Prabal Studios</p>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">2 Published Apps</p>
              </div>
            </div>

            {/* Engineering Pillars */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Engineering Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all group"
                    >
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform w-fit mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h5>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resume & LinkedIn Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                id="about-resume-download-btn"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>View Complete Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200/80 dark:border-slate-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn: prabal-maurya-113232244</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
