import type { Service } from '@/types/portfolio';
import SectionHeading from './section-heading';

type Props = {
    services: Service[];
    stack: string[];
};

export default function Services({ services, stack }: Props) {
    return (
        <section
            id="services"
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
        >
            <SectionHeading index="02" label="Services">
                Yang bisa saya bantu bangun.
            </SectionHeading>

            <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
                <ol className="divide-y divide-ink/15 border-y border-ink/15">
                    {services.map((service, i) => (
                        <li
                            key={service.title}
                            className="group grid grid-cols-[48px_1fr] gap-4 py-6 md:grid-cols-[64px_1fr_1.2fr] md:items-baseline"
                        >
                            <span className="font-mono text-sm text-ink/40">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display text-2xl font-semibold transition group-hover:translate-x-2">
                                {service.title}
                            </h3>
                            <p className="col-start-2 text-ink/70 md:col-start-auto">
                                {service.description}
                            </p>
                        </li>
                    ))}
                </ol>

                <div>
                    <p className="font-mono text-xs tracking-widest text-ink/60 uppercase">
                        Tech stack
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-md border border-ink bg-white px-3 py-2 font-mono text-sm transition hover:bg-volt"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
