import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/portfolio';
import SectionHeading from './section-heading';

// Warna cover bergantian. Nanti bisa diganti screenshot asli tiap project.
const covers = [
    'bg-ink text-volt',
    'bg-volt text-ink',
    'bg-[#e4dfd2] text-ink',
];

function initials(title: string): string {
    return title
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 3)
        .toUpperCase();
}

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
        >
            <SectionHeading
                index="01"
                label="Selected work"
                aside="Project yang saya bangun untuk pekerjaan, kuliah, dan ide sendiri."
            >
                Project terbaru.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, i) => {
                    const Wrapper = project.url ? 'a' : 'div';

                    return (
                        <Wrapper
                            key={project.title}
                            {...(project.url
                                ? {
                                      href: project.url,
                                      target: '_blank',
                                      rel: 'noreferrer',
                                  }
                                : {})}
                            className="group block overflow-hidden rounded-lg border border-ink bg-white transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
                        >
                            <div
                                className={`relative flex aspect-[16/9] items-end justify-between p-6 ${covers[i % covers.length]}`}
                            >
                                <span className="font-mono text-xs opacity-70">
                                    {String(i + 1).padStart(2, '0')} /{' '}
                                    {project.year}
                                </span>
                                <span className="font-display text-7xl font-bold tracking-tighter md:text-8xl">
                                    {initials(project.title)}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-mono text-xs tracking-wider text-ink/50 uppercase">
                                            {project.category}
                                        </p>
                                        <h3 className="mt-1 font-display text-2xl font-semibold">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {project.url && (
                                        <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    )}
                                </div>
                                <p className="mt-3 text-ink/70">
                                    {project.description}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded border border-ink/20 px-2 py-1 font-mono text-[11px]"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}
