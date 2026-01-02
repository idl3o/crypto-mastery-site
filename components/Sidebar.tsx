'use client';

import Link from 'next/link';
import { curriculum, phases } from '@/lib/curriculum';

interface SidebarProps {
  currentSection?: string;
  currentModule?: string;
}

export default function Sidebar({ currentSection, currentModule }: SidebarProps) {
  return (
    <aside className="w-72 bg-gray-900/50 border-r border-gray-800 h-screen overflow-y-auto fixed left-0 top-0">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <span className="text-2xl">₿</span>
          <span className="font-bold text-lg text-white">Crypto Mastery</span>
        </Link>

        {phases.map((phase) => (
          <div key={phase.number} className="mb-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
              Phase {phase.number}: {phase.title}
            </div>

            {curriculum
              .filter((section) => section.phase === phase.number)
              .map((section) => (
                <div key={section.id} className="mb-2">
                  <div className={`px-3 py-2 text-sm font-medium ${
                    currentSection === section.id ? 'text-orange-400' : 'text-gray-300'
                  }`}>
                    {section.title}
                  </div>

                  <div className="ml-2">
                    {section.modules.map((module) => (
                      <Link
                        key={module.id}
                        href={`/${section.id}/${module.file}`}
                        className={`sidebar-link text-sm ${
                          currentSection === section.id && currentModule === module.file
                            ? 'active'
                            : ''
                        }`}
                      >
                        {module.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
