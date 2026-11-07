import type { Profile } from '@/types/portfolio';

const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
];

export default function Navbar({ profile }: { profile: Profile }) {
    return (
        <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/85 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#top" className="font-mono text-sm font-medium">
                    {profile.nickname.toLowerCase()}.dev
                    <span className="ml-0.5 animate-pulse text-ink/50">_</span>
                </a>

                <ul className="hidden items-center gap-8 font-mono text-xs tracking-wider uppercase md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-ink/60 transition hover:text-ink"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="rounded-md bg-ink px-4 py-2 font-mono text-xs tracking-wider text-paper uppercase transition hover:bg-ink/80"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
