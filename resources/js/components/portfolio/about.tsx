import type { Experience, Profile } from '@/types/portfolio';
import SectionHeading from './section-heading';

type Props = {
    profile: Profile;
    experience: Experience[];
};

export default function About({ profile, experience }: Props) {
    const monogram = profile.name
        .split(' ')
        .map((word) => word[0])
        .join('');

    return (
        <section
            id="about"
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
        >
            <SectionHeading index="03" label="About">
                Dari Teknik Elektro ke fullstack.
            </SectionHeading>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
                <div>
                    {/* Ganti blok ini dengan <img> foto kamu kalau sudah ada. */}
                    <div className="flex aspect-square items-center justify-center rounded-lg border border-ink bg-ink font-display text-8xl font-bold text-volt">
                        {monogram}
                    </div>
                    <p className="mt-5 font-display text-xl font-semibold">
                        {profile.name}
                    </p>
                    <p className="text-sm text-ink/60">
                        {profile.role} · {profile.location}
                    </p>

                    <p className="mt-10 font-mono text-xs tracking-widest text-ink/60 uppercase">
                        Pengalaman
                    </p>
                    <ul className="mt-4 border-l border-ink">
                        {experience.map((item) => (
                            <li
                                key={item.place}
                                className="relative pb-6 pl-6 last:pb-0"
                            >
                                <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-ink" />
                                <p className="font-medium">{item.place}</p>
                                <p className="text-sm text-ink/60">
                                    {item.role}
                                </p>
                                <p className="font-mono text-xs text-ink/40">
                                    {item.period}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6 text-xl leading-relaxed text-ink/80 md:text-2xl">
                    {profile.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
