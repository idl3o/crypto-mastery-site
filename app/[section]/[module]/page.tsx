import { curriculum } from '@/lib/curriculum';
import Sidebar from '@/components/Sidebar';
import ModuleContent from '@/components/ModuleContent';
import { notFound } from 'next/navigation';
import { contentMap } from '@/lib/content';

interface PageProps {
  params: Promise<{
    section: string;
    module: string;
  }>;
}

export function generateStaticParams() {
  const params: { section: string; module: string }[] = [];

  curriculum.forEach((section) => {
    section.modules.forEach((mod) => {
      params.push({
        section: section.id,
        module: mod.file,
      });
    });
  });

  return params;
}

function getNavigation(sectionId: string, moduleFile: string) {
  const allModules: { sectionId: string; sectionTitle: string; module: { title: string; file: string } }[] = [];

  curriculum.forEach((section) => {
    section.modules.forEach((mod) => {
      allModules.push({
        sectionId: section.id,
        sectionTitle: section.title,
        module: mod,
      });
    });
  });

  const currentIndex = allModules.findIndex(
    (m) => m.sectionId === sectionId && m.module.file === moduleFile
  );

  const prev = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const next = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  return {
    prev: prev ? { title: prev.module.title, href: `/${prev.sectionId}/${prev.module.file}` } : undefined,
    next: next ? { title: next.module.title, href: `/${next.sectionId}/${next.module.file}` } : undefined,
  };
}

export default async function ModulePage({ params }: PageProps) {
  const { section: sectionId, module: moduleFile } = await params;

  const section = curriculum.find((s) => s.id === sectionId);
  if (!section) notFound();

  const mod = section.modules.find((m) => m.file === moduleFile);
  if (!mod) notFound();

  const contentKey = `${sectionId}/${moduleFile}`;
  const content = contentMap[contentKey] || '# Content not found\n\nThis module is still being prepared.';

  const { prev, next } = getNavigation(sectionId, moduleFile);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar currentSection={sectionId} currentModule={moduleFile} />
      <main className="flex-1 ml-72 p-8 lg:p-12">
        <ModuleContent
          content={content}
          title={mod.title}
          section={section.title}
          prevModule={prev}
          nextModule={next}
        />
      </main>
    </div>
  );
}
