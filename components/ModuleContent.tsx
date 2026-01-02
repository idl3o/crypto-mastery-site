'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface ModuleContentProps {
  content: string;
  title: string;
  section: string;
  prevModule?: { title: string; href: string };
  nextModule?: { title: string; href: string };
}

export default function ModuleContent({
  content,
  title,
  section,
  prevModule,
  nextModule
}: ModuleContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-2">{section}</div>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>

      <article className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>

      <nav className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        {prevModule ? (
          <Link
            href={prevModule.href}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-gray-500">Previous</div>
              <div>{prevModule.title}</div>
            </div>
          </Link>
        ) : <div />}

        {nextModule ? (
          <Link
            href={nextModule.href}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-right"
          >
            <div>
              <div className="text-xs text-gray-500">Next</div>
              <div>{nextModule.title}</div>
            </div>
            <span>→</span>
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
