import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { ButtonLink, Card, Headline, Mark, Tag } from '@/components/public/ui';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import type { Profile, Project } from '@/types/portfolio';

type Props = {
    profile: Profile;
    project: Project;
    next: { slug: string; title: string };
};

export default function ProjectShow({ profile, project, next }: Props) {
    const meta = [
        { label: 'Peran', value: project.role },
        { label: 'Tahun', value: project.year },
        { label: 'Stack', value: project.stack.join(' · ') },
        { label: 'Status', value: project.status },
    ];

    return (
        <PublicLayout
            profile={profile}
            title={`${project.title} - ${profile.name}`}
            description={project.summary}
        >
            <nav className="flex gap-2 pt-8 text-[13px]">
                <Link
                    href="/projects"
                    className="font-medium text-ink-muted hover:text-ink"
                >
                    Project
                </Link>
                <span className="text-ink-muted">/</span>
                <span className="font-medium">{project.title}</span>
            </nav>

            <section className="pt-6 pb-3">
                <Tag>{project.category}</Tag>
                <Headline
                    className="mt-4"
                    lines={[
                        { text: `${project.title},`, muted: false },
                        { text: project.tagline, muted: true },
                    ]}
                />
                <p className="mt-4 max-w-xl leading-relaxed text-ink-sub">
                    {project.summary}
                </p>
                {project.url && (
                    <ButtonLink href={project.url} external className="mt-6">
                        Kunjungi website <ArrowUpRight className="h-4 w-4" />
                    </ButtonLink>
                )}
            </section>

            <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {meta.map((item) => (
                    <Card key={item.label} className="p-4">
                        <p className="text-xs text-ink-muted">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                    </Card>
                ))}
            </section>

            {/* Preview. Ganti dengan screenshot asli project (misalnya <img src="/images/wfc-1.png" />). */}
            <div
                className={cn(
                    'mt-4 flex h-[280px] items-center justify-center rounded-3xl sm:h-[420px]',
                    project.featured ? 'bg-brand-soft' : 'bg-soft',
                )}
            >
                <Mark
                    text={project.title}
                    size="lg"
                    highlight={project.featured}
                />
            </div>

            {(project.problem || project.solution) && (
                <section className="mt-4 grid gap-4 md:grid-cols-2">
                    {project.problem && (
                        <Card className="space-y-2.5 p-6">
                            <Tag>Masalah</Tag>
                            <p className="leading-relaxed">{project.problem}</p>
                        </Card>
                    )}
                    {project.solution && (
                        <Card className="space-y-2.5 p-6">
                            <Tag>Solusi</Tag>
                            <p className="leading-relaxed">
                                {project.solution}
                            </p>
                        </Card>
                    )}
                </section>
            )}

            {project.features.length > 0 && (
                <section className="mt-8 space-y-3.5">
                    <h2 className="text-[1.75rem] font-semibold tracking-tight">
                        Fitur utama
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {project.features.map((feature, i) => (
                            <div
                                key={feature.title}
                                className={cn(
                                    'space-y-2 rounded-[22px] p-5 shadow-soft',
                                    i === 0
                                        ? 'bg-ink text-surface'
                                        : 'border border-line bg-surface',
                                )}
                            >
                                <p
                                    className={cn(
                                        'text-xs font-medium',
                                        i === 0
                                            ? 'text-brand-soft'
                                            : 'text-ink-muted',
                                    )}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </p>
                                <p className="text-lg font-semibold tracking-tight">
                                    {feature.title}
                                </p>
                                <p
                                    className={cn(
                                        'text-sm leading-relaxed',
                                        i === 0
                                            ? 'text-ink-muted'
                                            : 'text-ink-sub',
                                    )}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {project.learning && (
                <Card className="mt-4 space-y-2.5 p-6">
                    <Tag>Yang saya pelajari</Tag>
                    <p className="text-lg leading-relaxed">
                        {project.learning}
                    </p>
                </Card>
            )}

            {!project.problem && !project.features.length && (
                <Card className="mt-4 p-6 text-sm text-ink-sub">
                    Cerita lengkap project ini sedang ditulis.
                </Card>
            )}

            <div className="mt-4 flex flex-col gap-4 rounded-[22px] bg-ink p-6 text-surface shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <Link href={`/projects/${next.slug}`} className="group">
                    <p className="text-[13px] text-ink-muted">
                        Project berikutnya
                    </p>
                    <p className="text-2xl font-semibold tracking-tight group-hover:underline">
                        {next.title} →
                    </p>
                </Link>
                <Link
                    href="/projects"
                    className="inline-flex justify-center rounded-full bg-surface px-5 py-3 text-sm font-medium text-ink"
                >
                    Lihat semua project
                </Link>
            </div>
        </PublicLayout>
    );
}
