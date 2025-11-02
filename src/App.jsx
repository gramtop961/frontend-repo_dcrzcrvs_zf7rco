import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />

        <section id="how" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Upload material or enter a topic. Your StudyBuddy summarizes the key ideas, generates flashcards and quizzes, and stays available for follow-up Q&A.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-3">
              {["Add your content", "Get personalized study pack", "Practice and chat"].map((step, idx) => (
                <li key={step} className="relative rounded-xl border border-neutral-200/70 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                  <span className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-semibold shadow-sm dark:bg-white dark:text-neutral-900">
                    {idx + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {idx === 0 && 'Paste notes, upload a PDF, or type a subject you want to master.'}
                    {idx === 1 && 'We craft concise explanations, example questions, and flashcards tuned to your level.'}
                    {idx === 2 && 'Test yourself with quizzes and ask follow-up questions to fill gaps.'}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">Start free. Upgrade when you need more power.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">For quick sessions and light studying.</p>
                <p className="mt-6 text-4xl font-extrabold">$0</p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                  <li>• Limited daily generations</li>
                  <li>• Flashcards & quizzes</li>
                  <li>• Chat with notes</li>
                </ul>
                <a href="#get-started" className="mt-8 inline-flex rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">Get started</a>
              </div>

              <div className="relative rounded-2xl border border-indigo-300/60 bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-8 shadow-sm dark:border-indigo-500/30 dark:from-indigo-500/10 dark:to-fuchsia-500/10">
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-3 py-1 text-xs font-semibold text-white shadow">Popular</span>
                <h3 className="mt-2 text-xl font-semibold">Pro</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">For deep studying and exam prep.</p>
                <p className="mt-6 text-4xl font-extrabold">$9<span className="text-lg font-bold">/mo</span></p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                  <li>• Unlimited generations</li>
                  <li>• Advanced quiz modes</li>
                  <li>• Priority support</li>
                </ul>
                <a href="#get-started" className="mt-8 inline-flex rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95">Upgrade to Pro</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
