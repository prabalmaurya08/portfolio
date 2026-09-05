import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, Smartphone, Terminal, Sparkles, Code2, MapPin, User, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const stackItems = [
    'Flutter & Dart',
    'Java Backend & RESTful APIs',
    'Android (Kotlin & Jetpack Compose)',
    'Google Play Store Publisher',
    'Firebase Cloud Architecture'
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'code'>('profile');

  useEffect(() => {
    const current = stackItems[index];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % stackItems.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-violet-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Software Engineering Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Prabal{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">
                  Maurya
                </span>
              </h1>

              {/* Dynamic Tech Specialization */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-base sm:text-xl font-medium text-slate-600 dark:text-slate-300 pt-1 min-h-[36px]">
                <span className="text-slate-400 dark:text-slate-500">Software Developer •</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-indigo-300 dark:decoration-indigo-700 decoration-2 underline-offset-4">
                  {displayText}
                  <span className="animate-ping font-light">|</span>
                </span>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Software Developer specializing in <strong>Flutter</strong>, <strong>Android (Kotlin)</strong>, and <strong>Clean Architecture</strong>. Creator of live Google Play Store applications <strong>SubCare</strong> and <strong>KnowFlakes</strong> under the publishing brand <strong>Prabal Studios</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                id="hero-view-projects-cta"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-linkedin-cta"
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-semibold text-xs shadow-md shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <a
                id="hero-resume-cta"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-800 shadow-2xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5 text-indigo-500" />
                <span>Resume (PDF)</span>
              </a>

              <a
                id="hero-contact-cta"
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200/70 dark:border-slate-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>Lucknow, India</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-1.5 text-[#0A66C2] dark:text-blue-400 font-medium hover:underline transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/prabal-maurya-113232244</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile & Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden backdrop-blur-xl">
              {/* Card Header with View Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-slate-800 dark:text-slate-200">Prabal Maurya</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold">
                    Developer
                  </span>
                </div>

                <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-all ${
                      activeTab === 'profile'
                        ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>Photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-all ${
                      activeTab === 'code'
                        ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* View 1: Professional Portrait View */}
              {activeTab === 'profile' ? (
                <div className="pt-4 space-y-4">
                  <div className="relative mx-auto w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-900/60 shadow-lg group bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <img
                      src="/profile.png"
                      alt="Prabal Maurya - Software Developer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image path fails
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    {/* Glowing highlight ring */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
                  </div>

                  {/* Quick Profile Meta */}
                  <div className="text-center space-y-1">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Prabal Maurya
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                      Software Developer • Flutter & Java Backend
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <p className="text-slate-500 dark:text-slate-400">Play Store Publisher</p>
                      <p className="font-bold text-slate-900 dark:text-white mt-0.5">Prabal Studios</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
                      <p className="text-emerald-700 dark:text-emerald-400 font-medium">Live on Play Store</p>
                      <p className="font-bold text-emerald-900 dark:text-emerald-300 mt-0.5">SubCare & KnowFlakes</p>
                    </div>
                  </div>

                  {/* Quick LinkedIn Anchor */}
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              ) : (
                /* View 2: Developer Code Snapshot */
                <div className="pt-4 pb-2 font-mono text-xs space-y-2 leading-relaxed text-slate-800 dark:text-slate-300">
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-amber-600 dark:text-amber-300">SoftwareDeveloper</span> {'{'}
                  </p>
                  <div className="pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">final String</span> name = <span className="text-emerald-600 dark:text-emerald-300">'Prabal Maurya'</span>;
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">final String</span> role = <span className="text-emerald-600 dark:text-emerald-300">'Flutter & Java Engineer'</span>;
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">final List&lt;String&gt;</span> stack = [
                    </p>
                    <p className="pl-4 text-emerald-600 dark:text-emerald-300">
                      'Flutter', 'Java Backend', 'Kotlin', 'Firebase'
                    </p>
                    <p className="pl-4 text-slate-500">];</p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">final List&lt;String&gt;</span> liveApps = [
                    </p>
                    <p className="pl-4 text-indigo-600 dark:text-indigo-400 font-semibold">
                      'SubCare', 'KnowFlakes'
                    </p>
                    <p className="pl-4 text-slate-500">];</p>
                  </div>
                  <p>{'}'}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">Backend Stack</p>
                      <p className="font-semibold text-slate-900 dark:text-white mt-0.5">Java / REST / Firebase</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">Mobile Stack</p>
                      <p className="font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">Flutter & Android</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
