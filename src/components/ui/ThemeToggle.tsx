import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={onToggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform rotate-0 scale-100" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 transition-transform rotate-0 scale-100" />
      )}
    </button>
  );
};
