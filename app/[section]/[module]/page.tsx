import { curriculum } from '@/lib/curriculum';
import Sidebar from '@/components/Sidebar';
import ModuleContent from '@/components/ModuleContent';
import { notFound } from 'next/navigation';
import { contentMap } from '@/lib/content';

interface PageProps {
  params: {
    section: string;
    module: string;
  };
}

export function generateStaticParams() {
  const params: { section: string; module: string }[] = [];

  curriculum.forEach((section) => {
    section.modules.forEach((module) => {
      params.push({
        section: section.id,
        module: module.file,
      });
    });
  });

  return params;
}

function getNavigation(sectionId: string, moduleFile: string) {
  const allModules: { sectionId: string; sectionTitle: string; module: { title: string; file: string } }[] = [];

  curriculum.forEach((section) => {
    section.modules.forEach((module) => {
      allModules.push({
        sectionId: section.id,
        sectionTitle: section.title,
        module,
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

export default function ModulePage({ params }: PageProps) {
  const section = curriculum.find((s) => s.id === params.section);
  if (!section) notFound();

  const module = section.modules.find((m) => m.file === params.module);
  if (!module) notFound();

  const contentKey = `${params.section}/${params.module}`;
  const content = contentMap[contentKey] || '# Content not found\n\nThis module is still being prepared.';

  const { prev, next } = getNavigation(params.section, params.module);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar currentSection={params.section} currentModule={params.module} />
      <main className="flex-1 ml-72 p-8 lg:p-12">
        <ModuleContent
          content={content}
          title={module.title}
          section={section.title}
          prevModule={prev}
          nextModule={next}
        />
      </main>
    </div>
  );
}
