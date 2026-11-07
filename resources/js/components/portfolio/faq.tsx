import { Plus } from 'lucide-react';
import type { Faq as FaqItem, Profile } from '@/types/portfolio';
import SectionHeading from './section-heading';

type Props = {
    faqs: FaqItem[];
    profile: Profile;
};

export default function Faq({ faqs, profile }: Props) {
    return (
        <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
            <SectionHeading index="05" label="FAQ">
                Pertanyaan yang sering muncul.
            </SectionHeading>

            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
                {/* <details> = accordion bawaan HTML. Tanpa JavaScript, aman untuk SSR. */}
                <div className="divide-y divide-ink/15 border-y border-ink/15">
                    {faqs.map((faq, i) => (
                        <details
                            key={faq.question}
                            className="group py-5"
                            open={i === 0}
                        >
                            <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                                <span className="font-mono text-sm text-ink/40">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="flex-1 font-display text-lg font-medium md:text-xl">
                                    {faq.question}
                                </span>
                                <Plus className="h-5 w-5 shrink-0 transition group-open:rotate-45" />
                            </summary>
                            <p className="mt-4 pl-10 text-ink/70">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>

                <aside className="h-fit rounded-lg border border-ink bg-volt p-8 shadow-[6px_6px_0_0_var(--color-ink)]">
                    <p className="font-mono text-xs tracking-widest uppercase">
                        Masih ragu?
                    </p>
                    <p className="mt-4 font-display text-3xl leading-tight font-semibold">
                        Ceritakan idemu, diskusi awal gratis.
                    </p>
                    <p className="mt-4 text-ink/70">
                        Kirim pesan singkat soal kebutuhanmu. Saya balas dengan
                        pertanyaan lanjutan dan gambaran langkah awalnya.
                    </p>
                    <a
                        href={`https://wa.me/${profile.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:-translate-y-0.5"
                    >
                        Mulai diskusi
                    </a>
                </aside>
            </div>
        </section>
    );
}
