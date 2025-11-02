import React from 'react';
import { Sparkles, Brain, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.20),transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/40 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-200">
              <Sparkles size={14} /> Your AI-powered learning companion
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
              Study smarter, not harder.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 text-neutral-600 dark:text-neutral-300">
              AI StudyBuddy helps you turn any topic into clear explanations, instant flashcards, and personalized practice quizzes — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
              >
                See what it can do
              </a>
              <a
                href="#try"
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                Try a quick demo
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200/70 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <Brain size={16} /> Concept breakdown
              </div>
              <div className="mt-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-4 text-sm leading-6 text-neutral-700 dark:text-neutral-200">
                Photosynthesis is the process by which plants convert light energy into chemical energy, primarily in the chloroplasts. It consists of light-dependent reactions and the Calvin cycle.
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200/70 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <MessageSquare size={16} /> Flashcards generated
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-200">
                <li className="rounded-md border border-neutral-200/70 p-3 dark:border-neutral-700">Q: Where in the cell does photosynthesis occur? <span className="block text-neutral-500 dark:text-neutral-400">A: In the chloroplasts</span></li>
                <li className="rounded-md border border-neutral-200/70 p-3 dark:border-neutral-700">Q: What are the two main stages? <span className="block text-neutral-500 dark:text-neutral-400">A: Light reactions and the Calvin cycle</span></li>
                <li className="rounded-md border border-neutral-200/70 p-3 dark:border-neutral-700">Q: What gas is produced? <span className="block text-neutral-500 dark:text-neutral-400">A: Oxygen (O₂)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
