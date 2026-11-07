import {
    ButtonLink,
    Card,
    Headline,
    Pill,
    StatusBadge,
    Tag,
} from '@/components/public/ui';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import type {
    Experience,
    Profile,
    SkillGroup,
    Stat,
    Value,
} from '@/types/portfolio';

type Props = {
    profile: Profile;
    stats: Stat[];
    values: Value[];
    experience: Experience[];
    skills: SkillGroup[];
};

export default function About({
    profile,
    stats,
    values,
    experience,
    skills,
}: Props) {
    return (
        <PublicLayout profile={profile} title={`Tentang - ${profile.name}`}>
            <section className="flex flex-col gap-8 pt-12 pb-2 sm:pt-14 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <Tag>Tentang saya</Tag>
                    <Headline
                        className="mt-4"
                        lines={[
                            { text: 'Dari Teknik Elektro,', muted: false },
                            { text: 'lapangan sales,', muted: true },
                            { text: 'sampai menulis kode.', muted: false },
                        ]}
                    />
                </div>

                {/* Kartu foto. Isi 'photo' di config/portfolio.php untuk menampilkan fotomu. */}
                <div className="relative flex h-[340px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-ink p-[18px] shadow-soft lg:w-[300px]">
                    {profile.photo && (
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="relative">
                        <StatusBadge
                            label={profile.availability}
                            active={profile.available}
                        />
                    </div>
                    <div className="relative text-surface">
                        {!profile.photo && (
                            <p className="text-xs text-ink-muted">
                                Foto kamu di sini
                            </p>
                        )}
                        <p className="text-[22px] font-semibold tracking-tight">
                            {profile.name}
                        </p>
                        <p className="text-[13px] text-ink-muted">
                            {profile.role} · {profile.location.split(',')[0]}
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-5 grid gap-4 lg:grid-cols-[1fr_347px]">
                <Card className="space-y-4 p-7">
                    <Tag>Cerita singkat</Tag>
                    {profile.bio.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-[17px] leading-[1.65]"
                        >
                            {paragraph}
                        </p>
                    ))}
                </Card>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {stats.map((stat) => (
                        <Card key={stat.label}>
                            <p className="text-4xl font-semibold tracking-[-0.04em]">
                                {stat.value}
                            </p>
                            <p className="text-[13px] text-ink-sub">
                                {stat.label}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mt-8 space-y-3.5">
                <h2 className="text-[1.75rem] font-semibold tracking-tight">
                    Prinsip kerja
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                    {values.map((value, i) => (
                        <Card key={value.title} className="space-y-2 p-[22px]">
                            <span
                                className={cn(
                                    'flex h-[30px] w-[30px] items-center justify-center rounded-full text-xs font-medium',
                                    i === 0
                                        ? 'bg-brand text-surface'
                                        : 'bg-soft',
                                )}
                            >
                                {i + 1}
                            </span>
                            <p className="text-lg font-semibold tracking-tight">
                                {value.title}
                            </p>
                            <p className="text-sm leading-relaxed text-ink-sub">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mt-4 grid gap-4 md:grid-cols-2">
                <Card className="p-6">
                    <Tag>Pengalaman & pendidikan</Tag>
                    <ul className="mt-2 divide-y divide-line">
                        {experience.map((item) => (
                            <li
                                key={item.title}
                                className="flex items-center justify-between gap-4 py-4"
                            >
                                <div>
                                    <p className="text-[15px] font-medium">
                                        {item.place}
                                    </p>
                                    <p className="text-[13px] text-ink-sub">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="shrink-0 text-xs text-ink-muted">
                                    {item.period}
                                </p>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card className="space-y-3.5 p-6">
                    <Tag>Keahlian</Tag>
                    {skills.map((group) => (
                        <div key={group.group} className="space-y-2">
                            <p className="text-xs font-medium text-ink-muted">
                                {group.group}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <Pill key={item}>{item}</Pill>
                                ))}
                            </div>
                        </div>
                    ))}
                </Card>
            </section>

            <div className="mt-4 flex flex-col gap-5 rounded-[22px] bg-ink p-7 text-surface shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-[1.75rem] font-semibold tracking-tight">
                        Mau kerja bareng?
                    </p>
                    <p className="text-sm text-ink-muted">
                        Saya terbuka untuk project lepas maupun kolaborasi
                        jangka panjang.
                    </p>
                </div>
                <ButtonLink
                    href="/contact"
                    variant="light"
                    className="border-0"
                >
                    Hubungi saya
                </ButtonLink>
            </div>
        </PublicLayout>
    );
}
