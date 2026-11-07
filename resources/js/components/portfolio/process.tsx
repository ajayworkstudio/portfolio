import type { Step } from '@/types/portfolio';

export default function Process({ steps }: { steps: Step[] }) {
    return (
        <section className="bg-ink py-24 text-paper">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 border-t border-paper pt-6">
                    <p className="font-mono text-xs tracking-widest text-paper/60 uppercase">
                        [04] Cara kerja
                    </p>
                    <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
                        Sederhana, transparan, bertahap.
                    </h2>
                </div>

                <ol className="grid gap-px overflow-hidden rounded-lg border border-paper/20 bg-paper/20 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <li key={step.title} className="bg-ink p-8">
                            <span className="font-mono text-sm text-volt">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="mt-6 font-display text-2xl font-semibold">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-paper/70">
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
