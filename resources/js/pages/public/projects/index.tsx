import { useState } from 'react';
import ProjectCard from '@/components/public/project-card';
import { Headline, Tag } from '@/components/public/ui';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import type { Profile, Project, ProjectGroup } from '@/types/portfolio';

const filters: { value: ProjectGroup | 'all'; label: string }[] = [
    { value: 'all', label: 'Semua' },
    { value: 'web', label: 'Web App' },
    { value: 'iot', label: 'IoT' },
    { value: 'automation', label: 'Otomasi' },
];

export default function ProjectIndex({
    profile,
    projects,
}: {
    profile: Profile;
    projects: Project[];
}) {
    // Filter berjalan di browser saja (state React), tidak perlu request ke server.
    const [active, setActive] = useState<ProjectGroup | 'all'>('all');
    const shown =
        active === 'all'
            ? projects
            : projects.filter((project) => project.group === active);

    return (
        <PublicLayout profile={profile} title={`Project - ${profile.name}`}>
            <section className="pt-12 pb-3 sm:pt-14">
                <Tag>Project · {projects.length}</Tag>
                <Headline
                    className="mt-4"
                    lines={[
                        { text: 'Hal-hal yang sudah', muted: false },
                        { text: 'saya bangun.', muted: true },
                    ]}
                />
                <p className="mt-4 max-w-xl leading-relaxed text-ink-sub">
                    Dari web app untuk komunitas, alat bantu kerja lapangan,
                    sampai perangkat IoT untuk tugas akhir.
                </p>
            </section>

            <div className="mt-5 inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        type="button"
                        onClick={() => setActive(filter.value)}
                        className={cn(
                            'rounded-full px-4 py-2 text-[13px] font-medium transition',
                            active === filter.value
                                ? 'bg-ink text-surface'
                                : 'text-ink-sub hover:text-ink',
                        )}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <section className="mt-5 grid gap-4 md:grid-cols-2">
                {shown.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
                {shown.length === 0 && (
                    <p className="text-sm text-ink-sub">
                        Belum ada project di kategori ini.
                    </p>
                )}
            </section>
        </PublicLayout>
    );
}
