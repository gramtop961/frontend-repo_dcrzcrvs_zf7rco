import React from 'react';
import { Rocket, BookOpen, Bot, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Bot size={18} />
            </span>
            <span className="text-lg tracking-tight">AI StudyBuddy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-neutral-900 dark:hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#try"
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <BookOpen size={16} />
              Explore
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Rocket size={16} />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
