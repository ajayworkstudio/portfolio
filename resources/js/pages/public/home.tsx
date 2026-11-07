import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import LocalTime from '@/components/public/local-time';
import {
    ButtonLink,
    Card,
    Headline,
    Mark,
    Pill,
    StatusBadge,
    Tag,
    whatsappUrl,
} from '@/components/public/ui';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import type {
    Experience,
    Learning,
    Profile,
    Project,
    Step,
} from '@/types/portfolio';

type Props = {
    profile: Profile;
    featured: Project;
    others: Project[];
    experience: Experience[];
    stack: string[];
    learning: Learning;
    process: Step[];
};

// Contoh isi preview aplikasi di kartu project unggulan. Ganti dengan screenshot asli nanti.
const previewRows = [
    { name: 'Ruang Seduh', note: 'Tenang · Wi-Fi kencang', rating: '4.8' },
    { name: 'Teras Kerja', note: 'Outdoor · colokan banyak', rating: '4.6' },
    { name: 'Kopi Pagi', note: 'Buka 24 jam', rating: '4.6' },
];

export default function Home({
    profile,
    featured,
    others,
    experience,
    stack,
    learning,
    process,
}: Props) {
    const progress = Math.round((learning.current / learning.total) * 100);

    return (
        <PublicLayout profile={profile}>
            {/* Hero */}
            <section className="pt-12 pb-5 sm:pt-14">
                <div className="mb-5 md:hidden">
                    <StatusBadge
                        label={profile.availability}
                        active={profile.available}
                    />
                </div>
                <Headline lines={profile.headline} />
                <div className="mt-7 flex flex-col gap-5 lg:flex-row lg:items-center">
                    <div className="flex gap-2.5">
                        <ButtonLink
                            href="/contact"
                            className="flex-1 sm:flex-none"
                        >
                            Hubungi saya
                        </ButtonLink>
                        <ButtonLink
                            href="/projects"
                            variant="light"
                            className="flex-1 sm:flex-none"
                        >
                            Lihat project
                        </ButtonLink>
                    </div>
                    <p className="max-w-sm text-[15px] leading-relaxed text-ink-sub">
                        {profile.intro}
                    </p>
                    <div className="hidden md:block">
                        <StatusBadge
                            label={profile.availability}
                            active={profile.available}
                        />
                    </div>
                </div>
            </section>

            {/* Bento grid */}
            <section className="mt-5 grid gap-4 md:grid-cols-3">
                {/* Project unggulan */}
                <Card className="flex flex-col gap-4 md:col-span-2">
                    <div className="flex items-center justify-between">
                        <Tag>Project unggulan</Tag>
                        {featured.url && (
                            <a
                                href={featured.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-brand"
                            >
                                {featured.url.replace('https://', '')} ↗
                            </a>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col-reverse gap-5 sm:flex-row">
                        <div className="flex flex-1 flex-col justify-end gap-2.5">
                            <Link
                                href={`/projects/${featured.slug}`}
                                className="text-[1.75rem] font-semibold tracking-tight hover:underline"
                            >
                                {featured.title}
                            </Link>
                            <p className="text-sm leading-relaxed text-ink-sub">
                                {featured.summary}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {featured.stack.map((tech) => (
                                    <Tag key={tech}>{tech}</Tag>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-2.5 rounded-2xl bg-brand-soft p-4 sm:w-[300px]">
                            {previewRows.map((row, i) => (
                                <div
                                    key={row.name}
                                    className="flex items-center gap-2.5 rounded-xl bg-surface p-2.5 shadow-soft"
                                >
                                    <span
                                        className={cn(
                                            'h-10 w-10 rounded-[9px]',
                                            i === 0 ? 'bg-brand' : 'bg-soft',
                                        )}
                                    />
                                    <div className="flex-1">
                                        <p className="text-[13px] font-medium">
                                            {row.name}
                                        </p>
                                        <p className="text-[11px] text-ink-muted">
                                            {row.note}
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-medium text-ink-sub">
                                        ★ {row.rating}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Perjalanan */}
                <Card className="space-y-4">
                    <Tag>Perjalanan</Tag>
                    <ol className="space-y-3.5">
                        {experience.map((item) => (
                            <li key={item.title} className="flex gap-3">
                                <span
                                    className={cn(
                                        'mt-1.5 h-[9px] w-[9px] shrink-0 rounded-full border-[1.5px]',
                                        item.current
                                            ? 'border-ink bg-ink'
                                            : 'border-ink/35 bg-surface',
                                    )}
                                />
                                <div>
                                    <p className="text-sm font-medium">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-ink-sub">
                                        {item.place}
                                    </p>
                                    <p className="text-[11px] text-ink-muted">
                                        {item.period}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Card>

                {/* Tech stack */}
                <Card className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Tag>Tech stack</Tag>
                        <span className="text-xs font-medium text-ink-muted">
                            {stack.length}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {stack.map((tech) => (
                            <Pill key={tech}>{tech}</Pill>
                        ))}
                    </div>
                </Card>

                {/* Sedang dipelajari */}
                <Card className="flex flex-col justify-between gap-6">
                    <Tag>Sedang dipelajari</Tag>
                    <div className="space-y-3">
                        <p className="text-[22px] font-semibold tracking-tight">
                            {learning.title}
                        </p>
                        <p className="text-[13px] leading-relaxed text-ink-sub">
                            {learning.description}
                        </p>
                        <div className="h-2 overflow-hidden rounded-full bg-soft">
                            <div
                                className="h-full rounded-full bg-brand"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-[11px]">
                            <span className="font-medium">
                                Modul {learning.current} / {learning.total}
                            </span>
                            <span className="text-ink-muted">
                                {learning.topic}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* Waktu lokal */}
                <Card className="flex flex-col justify-between gap-6">
                    <Tag>Basis</Tag>
                    <div>
                        <p className="flex items-end gap-1.5">
                            <span className="text-[3.25rem] leading-none font-semibold tracking-[-0.05em]">
                                <LocalTime timezone={profile.timezone} />
                            </span>
                            <span className="pb-1 text-sm font-medium text-ink-muted">
                                WIB
                            </span>
                        </p>
                        <p className="mt-1 text-sm font-medium">
                            {profile.location}
                        </p>
                        <p className="text-xs text-ink-sub">
                            {profile.response_time}
                        </p>
                    </div>
                </Card>

                {/* Cara kerja */}
                <Card className="space-y-3.5">
                    <Tag>Cara kerja</Tag>
                    {process.map((step, i) => (
                        <div
                            key={step.title}
                            className={cn(
                                'flex items-center gap-3 rounded-[14px] p-3',
                                i === 0 ? 'bg-soft' : 'border border-line',
                            )}
                        >
                            <span
                                className={cn(
                                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium',
                                    i === 0
                                        ? 'bg-ink text-surface'
                                        : 'border border-line',
                                )}
                            >
                                {i + 1}
                            </span>
                            <div>
                                <p className="text-sm font-medium">
                                    {step.title}
                                </p>
                                <p className="text-xs text-ink-sub">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Card>

                {/* Project lain */}
                <Card className="space-y-3 md:col-span-2">
                    <div className="flex items-center justify-between">
                        <Tag>Project lain</Tag>
                        <Link href="/projects" className="text-xs font-medium">
                            Lihat semua ↗
                        </Link>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {others.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group flex items-center gap-3 rounded-[14px] bg-soft p-3 transition hover:bg-line/60"
                            >
                                <Mark text={project.title} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium">
                                        {project.title}
                                    </p>
                                    <p className="text-[11px] text-ink-muted">
                                        {project.category}
                                    </p>
                                    <p className="line-clamp-2 text-xs text-ink-sub">
                                        {project.summary}
                                    </p>
                                </div>
                                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-sub transition group-hover:text-ink" />
                            </Link>
                        ))}
                    </div>
                </Card>

                {/* CTA */}
                <div className="flex flex-col gap-5 rounded-[22px] bg-ink p-7 text-surface shadow-soft sm:flex-row sm:items-center sm:justify-between md:col-span-3">
                    <div>
                        <p className="text-[1.75rem] font-semibold tracking-tight">
                            Punya ide project?
                        </p>
                        <p className="text-sm text-ink-muted">
                            Ceritakan kebutuhanmu, diskusi awal gratis.
                        </p>
                    </div>
                    <a
                        href={whatsappUrl(
                            profile.whatsapp,
                            'Halo Fajar, saya mau diskusi project.',
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-surface px-5 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5"
                    >
                        Mulai diskusi
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}
