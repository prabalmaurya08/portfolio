import React from 'react';
import { Code2, Mail, Phone, MapPin, Linkedin, Github, MessageSquare, ArrowUp, Smartphone, ExternalLink } from 'lucide-react';
import { personalInfo, publishedAppKnowFlakes, publishedAppSubCare } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Identity Column */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                <img
                  src="/profile.png"
                  alt="Prabal Maurya"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-bold text-base text-white">Prabal Maurya</span>
                <p className="text-xs text-indigo-400">Android & Software Developer</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specializing in Flutter, Java Backend, Kotlin, Jetpack Compose, and Cloud architectures. Creator and publisher of <strong>SubCare</strong> and <strong>KnowFlakes</strong> on Google Play.
            </p>

            {/* Play Store clarification note */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 max-w-md">
              <Smartphone className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-300 leading-relaxed space-y-1.5">
                <p>
                  <strong className="text-white">Note on Prabal Studios:</strong> <span className="text-slate-300">Prabal Studios</span> is my Google Play developer account & brand used solely for publishing and distributing mobile applications like <strong>SubCare</strong> and <strong>KnowFlakes</strong>.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={publishedAppSubCare.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-semibold text-[11px]"
                  >
                    <span>SubCare on Play Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href={publishedAppKnowFlakes.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-semibold text-[11px]"
                  >
                    <span>KnowFlakes</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Send Email"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills & Tech Stack</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience Timeline</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects (12+)</a>
              </li>
              <li>
                <a href="#published-app" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <span>Live Apps (SubCare & KnowFlakes)</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.2 rounded-full">2 Live</span>
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{personalInfo.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Lucknow, UP, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Prabal Maurya</span>. All rights reserved.
          </p>

          <button
            id="footer-scroll-top-btn"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
