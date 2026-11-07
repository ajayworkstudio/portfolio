import { Head } from '@inertiajs/react';

type Project = {
    title: string;
    category: string;
    description: string;
    stack: string[];
};

export default function Portfolio({ projects }: { projects: Project[] }) {
    return (
        <>
            <Head title="Fajar — Fullstack Developer" />

            <main className="mx-auto max-w-5xl px-6 py-24">
                {/* Hero */}
                <section className="mb-24">
                    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Open for projects
                    </span>
                    <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
                        Membangun web yang dipakai orang sungguhan.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-neutral-500">
                        Fullstack developer dengan latar Teknik Elektro, dari web app sampai perangkat IoT.
                    </p>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="mb-8 text-3xl font-semibold">Latest Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <article key={project.title} className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm text-neutral-500">{project.category}</p>
                                <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                                <p className="mt-3 text-neutral-600">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="rounded-md bg-neutral-100 px-2 py-1 text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}