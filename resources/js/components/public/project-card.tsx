import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/portfolio';
import { Mark, Tag } from './ui';

/** Kartu project besar untuk grid di halaman /projects. */
export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-[22px] border border-line bg-surface p-3.5 shadow-soft transition hover:-translate-y-1"
        >
            <div
                className={cn(
                    'flex aspect-[2.3/1] items-center justify-center rounded-2xl transition group-hover:scale-[0.99]',
                    project.featured ? 'bg-brand-soft' : 'bg-soft',
                )}
            >
                <Mark
                    text={project.title}
                    size="lg"
                    highlight={project.featured}
                />
            </div>

            <div className="space-y-2 px-1.5 pt-3.5 pb-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-xs text-ink-muted">
                        {project.category} · {project.year}
                    </p>
                </div>
                <p className="text-sm leading-relaxed text-ink-sub">
                    {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                    ))}
                </div>
            </div>
        </Link>
    );
}
