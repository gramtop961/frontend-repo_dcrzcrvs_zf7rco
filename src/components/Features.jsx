import React from 'react';
import { ClipboardList, BookOpen, MessageSquare, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Instant summaries',
    description:
      'Drop in a topic, PDF, or lecture notes and get clear takeaways, examples, and a study outline.',
    icon: Sparkles,
  },
  {
    title: 'Auto flashcards',
    description:
      'Generate spaced-repetition friendly flashcards from any content with one click.',
    icon: BookOpen,
  },
  {
    title: 'Practice quizzes',
    description:
      'Create customizable quizzes (MCQ, short answer) with explanations to test understanding.',
    icon: ClipboardList,
  },
  {
    title: 'Chat with your notes',
    description:
      'Ask questions and get answers grounded in your uploaded material and context.',
    icon: MessageSquare,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Everything you need to learn, in one place
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Built to help students and lifelong learners study faster and remember more.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-neutral-200/70 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-sm">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{f.description}</p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none dark:text-indigo-400 dark:hover:text-indigo-300">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
