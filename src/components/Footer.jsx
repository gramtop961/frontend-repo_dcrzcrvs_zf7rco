import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} AI StudyBuddy. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#privacy" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
