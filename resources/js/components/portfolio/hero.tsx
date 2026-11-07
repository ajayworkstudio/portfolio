import { ArrowDownRight, MessageCircle } from 'lucide-react';
import type { Profile } from '@/types/portfolio';

type Props = {
    profile: Profile;
    stack: string[];
    projectCount: number;
};

export default function Hero({ profile, stack, projectCount }: Props) {
    // Kata terakhir headline diberi highlight warna volt.
    const words = profile.headline.split(' ');
    const lastWord = words.pop();

    return (
        <section id="top" className="relative overflow-hidden">
            {/* Latar grid tipis seperti kertas milimeter */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(18_18_18/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(18_18_18/0.06)_1px,transparent_1px)] [background-size:48px_48px]"
            />

            <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-20 pb-16 md:pt-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                <div>
                    <p className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                        <span
                            className={`h-2 w-2 rounded-full ${profile.available ? 'bg-emerald-500' : 'bg-ink/30'}`}
                        />
                        {profile.availability}
                    </p>

                    <h1 className="mt-6 font-display text-5xl leading-[0.95] font-bold tracking-tight md:text-7xl">
                        {words.join(' ')}{' '}
                        <span className="bg-volt box-decoration-clone px-2">
                            {lastWord}
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg text-ink/70">
                        {profile.intro}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href={`https://wa.me/${profile.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:-translate-y-0.5"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Ngobrol via WhatsApp
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-md border border-ink px-5 py-3 text-sm font-medium transition hover:bg-ink hover:text-paper"
                        >
                            Lihat project
                            <ArrowDownRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Kartu "terminal" berisi ringkasan profil */}
                <div className="rounded-lg border border-ink bg-ink font-mono text-sm text-paper shadow-[8px_8px_0_0_var(--color-volt)]">
                    <div className="flex items-center gap-1.5 border-b border-paper/15 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-paper/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-paper/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-paper/25" />
                        <span className="ml-3 text-xs text-paper/50">
                            ~/whoami
                        </span>
                    </div>
                    <dl className="space-y-3 p-5">
                        {[
                            ['name', profile.name],
                            ['role', profile.role],
                            ['base', profile.location],
                            ['projects', `${projectCount} dibangun`],
                            ['stack', stack.slice(0, 3).join(', ')],
                        ].map(([key, value]) => (
                            <div
                                key={key}
                                className="grid grid-cols-[90px_1fr] gap-2"
                            >
                                <dt className="text-volt">{key}</dt>
                                <dd className="text-paper/85">{value}</dd>
                            </div>
                        ))}
                        <p className="pt-2 text-paper/50">
                            $ <span className="animate-pulse">▍</span>
                        </p>
                    </dl>
                </div>
            </div>

            {/* Marquee tech stack. Daftarnya digandakan supaya animasi berputar mulus. */}
            <div className="relative overflow-hidden border-y border-ink bg-volt py-4">
                <div className="flex w-max animate-marquee gap-10 font-mono text-sm font-medium tracking-wider uppercase">
                    {[...stack, ...stack].map((tech, i) => (
                        <span
                            key={`${tech}-${i}`}
                            className="flex items-center gap-10"
                        >
                            {tech}
                            <span aria-hidden>✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
