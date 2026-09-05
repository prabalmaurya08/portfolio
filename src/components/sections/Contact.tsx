import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-time Software Developer Opportunity',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructMailtoLink = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} - from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Prabal,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\n---\nSent from Prabal Maurya's Developer Portfolio`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const constructWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi Prabal, I'm reaching out from your portfolio regarding: ${formData.inquiryType}.\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message || 'Connecting with you regarding opportunities.'}`
    );
    return `https://wa.me/918437024071?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('submitting');

    // Check if user has configured a custom form endpoint (e.g., Formspree)
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_URL;

    if (formspreeEndpoint) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Message sent successfully! I will get back to you shortly at ' + formData.email);
          setFormData({
            name: '',
            email: '',
            inquiryType: 'Full-time Software Developer Opportunity',
            message: ''
          });
          return;
        }
      } catch (err) {
        console.warn('Form endpoint failed, falling back to mailto:', err);
      }
    }

    // Default immediate action: Launch user's email client pre-filled
    setTimeout(() => {
      window.location.href = constructMailtoLink();
      setStatus('success');
      setStatusMessage('Email draft created! You can also reach out directly via WhatsApp for an immediate response.');
    }, 400);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-800/50">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Discuss <span className="text-indigo-600 dark:text-indigo-400">Opportunities & Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            I am always open to discussing software engineering roles, mobile architecture challenges, or tech collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700 hover:border-indigo-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Email Address</p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">WhatsApp & Phone</p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {personalInfo.phoneDisplay}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Location</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Lucknow, UP, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Professional Profiles
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-semibold transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60">
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiters / Engineering Leads"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. yourname@company.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">
                    Topic / Opportunity Type
                  </label>
                  <select
                    name="inquiryType"
                    id="contact-inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Full-time Software Developer Opportunity">Full-time Software Developer Role</option>
                    <option value="Flutter / Mobile App Project">Mobile App Development Project</option>
                    <option value="Backend API / Firebase Architecture">Backend / Firebase Architecture</option>
                    <option value="General Tech Chat & Networking">General Tech Networking</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project, or opportunity..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                {/* Feedback Alerts */}
                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{statusMessage}</p>
                      <a
                        href={constructWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-emerald-700 dark:text-emerald-300 underline font-bold"
                      >
                        <span>Or click here to send directly on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Row with 2 Quick Dispatch Options */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {status === 'submitting' ? (
                      <span>Preparing...</span>
                    ) : (
                      <>
                        <span>Send Message (Email)</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <a
                    href={constructWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
