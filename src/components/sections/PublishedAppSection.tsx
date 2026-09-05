import React, { useState } from 'react';
import { 
  Smartphone, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Bot, 
  BellRing, 
  Award, 
  Layers,
  ArrowRight,
  Flame,
  CreditCard,
  Server,
  BarChart3,
  CalendarCheck,
  Check
} from 'lucide-react';
import { publishedApps, publishedAppKnowFlakes, publishedAppSubCare } from '../../data/portfolioData';

export const PublishedAppSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<'subcare' | 'knowflakes'>('subcare');

  const currentApp = selectedAppId === 'subcare' ? publishedAppSubCare : publishedAppKnowFlakes;

  const getFeatureBadges = (appId: string) => {
    if (appId === 'subcare') {
      return [
        { label: 'Java Backend REST Services', icon: Server, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60' },
        { label: 'Upcoming Renewal Alert Engine', icon: BellRing, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/60' },
        { label: 'Subscription Expense Analytics', icon: BarChart3, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60' },
        { label: 'Billing Cycles & Calendar Tracking', icon: CalendarCheck, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60' },
        { label: 'Flutter Material 3 UI & Offline Caching', icon: Layers, color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800/60' }
      ];
    }
    return [
      { label: 'Daily Lessons & Knowledge Battles', icon: Award, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60' },
      { label: 'Gemini AI Quiz Generation', icon: Bot, color: 'text-violet-500 bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60' },
      { label: 'Firebase Serverless Functions', icon: Flame, color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/60 border-orange-200 dark:border-orange-800/60' },
      { label: 'Push Notifications (FCM)', icon: BellRing, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/60' },
      { label: 'BLoC State Management Architecture', icon: Layers, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60' }
    ];
  };

  const featureBadges = getFeatureBadges(currentApp.id);

  return (
    <section
      id="published-app"
      className="py-24 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-50 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950 border-t border-slate-200/70 dark:border-slate-800/80 relative overflow-hidden transition-colors"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-0.5" />
            <span>Official Google Play Developer Releases</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Published <span className="bg-gradient-to-r from-emerald-600 via-indigo-600 to-amber-600 dark:from-emerald-400 dark:via-indigo-400 dark:to-amber-400 bg-clip-text text-transparent">Live Applications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Production-grade mobile applications built from scratch, architected with scalable backends, and actively published on the Google Play Store under my developer account <strong>Prabal Studios</strong>.
          </p>

          {/* App Switcher Tabs */}
          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm gap-2">
              <button
                type="button"
                id="tab-subcare"
                onClick={() => setSelectedAppId('subcare')}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedAppId === 'subcare'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm">
                  💳
                </div>
                <span>SubCare</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-semibold uppercase">
                  New Live
                </span>
              </button>

              <button
                type="button"
                id="tab-knowflakes"
                onClick={() => setSelectedAppId('knowflakes')}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedAppId === 'knowflakes'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm">
                  ❄️
                </div>
                <span>KnowFlakes</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-semibold uppercase">
                  Live
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Heroic Production Showcase Card */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-900/90 border-2 border-indigo-200/80 dark:border-slate-700/80 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden backdrop-blur-xl transition-all">
          {/* Top colored accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-indigo-600 to-amber-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: App Information & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              {/* Live Badge & Tech Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-xs font-bold shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Live on Google Play</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Google Play Developer: <strong>Prabal Studios</strong></span>
                </span>
              </div>

              {/* Title & Core Stack */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-xl shadow-xs">
                    {currentApp.id === 'subcare' ? '💳' : '❄️'}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {currentApp.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                  {currentApp.id === 'subcare' 
                    ? 'Flutter Mobile App · Java Backend · RESTful APIs · Subscription Management'
                    : 'Flutter · Firebase · BLoC · Google Cloud · Gemini API'}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {currentApp.tagline}
                </p>
              </div>

              {/* Main Description */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {currentApp.description}
              </p>

              {/* Key Highlights (Bullet Points) */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Engineering & Architecture Highlights
                </h4>
                <div className="space-y-2.5">
                  {currentApp.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prominent Google Play CTA Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  id={`${currentApp.id}-playstore-cta-btn`}
                  href={currentApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.164 2.164 0 0 1-.22-.968V2.782c0-.363.078-.7.22-.968zm11.235 11.238l2.58 2.58-12.03 6.946 9.45-9.526zm2.58-2.58l-2.58 2.58-9.45-9.527 12.03 6.947zm1.056 1.055l3.208 1.852a1.218 1.218 0 0 1 0 2.108l-3.208 1.852-2.124-2.124 2.124-2.124z"/>
                  </svg>
                  <span>View on Google Play →</span>
                </a>

                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Package: <code className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md text-slate-700 dark:text-slate-300">{currentApp.packageName}</code></span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Device Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white p-7 shadow-2xl border border-slate-800 relative overflow-hidden group">
                {/* Ambient glow inside card */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-5">
                  {/* Mock App Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 via-indigo-500 to-amber-400 flex items-center justify-center font-black text-white text-xl shadow-md">
                        {currentApp.id === 'subcare' ? '💳' : '❄️'}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">{currentApp.title}</h4>
                        <p className="text-xs text-emerald-400 font-medium">Production App</p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold">
                      ● Live
                    </span>
                  </div>

                  {/* Architecture & Feature Pills */}
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Architecture Pillars
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {featureBadges.map((badge, idx) => {
                        const Icon = badge.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200"
                          >
                            <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{badge.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Verified Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentApp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 text-[10px] font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Direct CTA */}
                  <a
                    href={currentApp.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors shadow-md mt-2"
                  >
                    <span>Open in Google Play Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Account Context Banner with Both Apps Listed */}
        <div className="mt-8 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">
                Developer Identity: Prabal Studios
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Official Google Play developer account used solely for publishing and distributing mobile applications including <strong>SubCare</strong> and <strong>KnowFlakes</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.prabalstudios.subcare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold transition-colors"
            >
              <span>SubCare</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.prabalstudios.knowflakes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold transition-colors"
            >
              <span>KnowFlakes</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
