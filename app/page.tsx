import Link from 'next/link';
import { curriculum, phases } from '@/lib/curriculum';

export default function Home() {
  const totalModules = curriculum.reduce((acc, section) => acc + section.modules.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-5xl">₿</span>
            <span className="text-5xl text-purple-400">Ξ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Crypto Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
            From novice to world-class understanding of cryptocurrency, blockchain, and decentralized finance.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold text-orange-400">{totalModules}</span>
              <span className="text-gray-400 ml-2">Modules</span>
            </div>
            <div className="bg-gray-800/50 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold text-purple-400">5</span>
              <span className="text-gray-400 ml-2">Phases</span>
            </div>
            <div className="bg-gray-800/50 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold text-green-400">Free</span>
              <span className="text-gray-400 ml-2">Forever</span>
            </div>
          </div>
          <Link
            href="/00-foundations/01-what-is-money"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Start Learning
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* Curriculum */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-12">Curriculum</h2>

        {phases.map((phase) => (
          <div key={phase.number} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                {phase.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <p className="text-gray-500">{phase.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-16">
              {curriculum
                .filter((section) => section.phase === phase.number)
                .map((section) => (
                  <div
                    key={section.id}
                    className="bg-gray-800/30 border border-gray-700 rounded-lg p-5 hover:border-orange-500/50 transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2">{section.title}</h4>
                    <p className="text-sm text-gray-500 mb-4">{section.description}</p>
                    <div className="space-y-1">
                      {section.modules.map((module) => (
                        <Link
                          key={module.id}
                          href={`/${section.id}/${module.file}`}
                          className="block text-sm text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          → {module.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>Built for deep understanding. No shortcuts.</p>
          <p className="mt-2 text-sm">Open source curriculum for mastering crypto.</p>
        </div>
      </footer>
    </div>
  );
}
