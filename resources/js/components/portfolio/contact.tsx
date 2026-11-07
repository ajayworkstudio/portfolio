import type { Profile } from '@/types/portfolio';

function formatPhone(raw: string): string {
    // 6281339646353 -> +62 813-3964-6353
    const local = raw.replace(/^62/, '');

    return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`;
}

export default function Contact({ profile }: { profile: Profile }) {
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className="scroll-mt-20 bg-ink text-paper">
            <div className="mx-auto max-w-6xl px-6 pt-24 pb-10">
                <p className="font-mono text-xs tracking-widest text-paper/60 uppercase">
                    [06] Contact
                </p>
                <h2 className="mt-6 font-display text-5xl leading-[0.95] font-bold tracking-tight md:text-8xl">
                    Punya ide?
                    <br />
                    <span className="text-volt">Ayo kita bangun.</span>
                </h2>

                <div className="mt-16 grid gap-10 border-t border-paper/20 pt-10 md:grid-cols-3">
                    <div>
                        <p className="font-mono text-xs tracking-widest text-paper/50 uppercase">
                            Email
                        </p>
                        <a
                            href={`mailto:${profile.email}`}
                            className="mt-2 block text-lg break-all hover:text-volt"
                        >
                            {profile.email}
                        </a>
                    </div>
                    <div>
                        <p className="font-mono text-xs tracking-widest text-paper/50 uppercase">
                            WhatsApp
                        </p>
                        <a
                            href={`https://wa.me/${profile.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 block text-lg hover:text-volt"
                        >
                            {formatPhone(profile.whatsapp)}
                        </a>
                    </div>
                    <div>
                        <p className="font-mono text-xs tracking-widest text-paper/50 uppercase">
                            Social
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-4 text-lg">
                            {profile.socials.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-volt"
                                    >
                                        {social.label} ↗
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 flex flex-col justify-between gap-2 font-mono text-xs text-paper/40 md:flex-row">
                    <p>
                        © {year} {profile.name}
                    </p>
                    <p>Dibangun dengan Laravel, Inertia &amp; React.</p>
                </div>
            </div>
        </footer>
    );
}
