import { Head, Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { whatsappUrl } from '@/components/public/ui';
import { cn } from '@/lib/utils';
import type { Profile } from '@/types/portfolio';

const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Project' },
    { href: '/about', label: 'Tentang' },
    { href: '/contact', label: 'Kontak' },
];

type Props = {
    profile: Profile;
    title?: string;
    description?: string;
    children: ReactNode;
};

/**
 * Kerangka semua halaman publik: latar abu-abu, "kertas" putih di tengah,
 * navbar di atas dan footer di bawah (sama dengan Soft/Nav & Soft/Footer di Figma).
 */
export default function PublicLayout({
    profile,
    title,
    description,
    children,
}: Props) {
    const { url } = usePage();
    const path = url.split('?')[0];
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === '/' ? path === '/' : path.startsWith(href);
    const initials = profile.name
        .split(' ')
        .map((word) => word[0])
        .join('');

    return (
        <>
            <Head title={title ?? `${profile.name} - ${profile.role}`}>
                <meta
                    name="description"
                    content={description ?? profile.intro}
                />
            </Head>

            <div className="min-h-screen bg-page font-inter text-ink antialiased selection:bg-brand-soft sm:bg-canvas sm:px-6 sm:py-10">
                <div className="mx-auto max-w-[1200px] bg-page px-4 py-5 sm:rounded-[28px] sm:border sm:border-line sm:px-10 sm:py-9 sm:shadow-soft lg:px-16">
                    <header className="relative flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2.5">
                            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-ink text-[13px] font-semibold text-surface">
                                {initials}
                            </span>
                            <span className="text-sm font-medium">
                                {profile.name}
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface p-1 md:flex">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'rounded-full px-3.5 py-1.5 text-[13px] font-medium transition',
                                        isActive(link.href)
                                            ? 'bg-soft text-ink'
                                            : 'text-ink-sub hover:text-ink',
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line bg-surface md:hidden"
                            aria-label={open ? 'Tutup menu' : 'Buka menu'}
                            aria-expanded={open}
                        >
                            {open ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </button>

                        {open && (
                            <nav className="absolute top-12 right-0 z-50 flex w-48 flex-col rounded-2xl border border-line bg-surface p-2 shadow-soft md:hidden">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'rounded-xl px-3 py-2 text-sm font-medium',
                                            isActive(link.href)
                                                ? 'bg-soft text-ink'
                                                : 'text-ink-sub',
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        )}
                    </header>

                    <main>{children}</main>

                    <footer className="mt-5 flex flex-col items-center gap-3 pt-3 text-xs sm:flex-row sm:justify-between">
                        <p className="text-ink-muted">
                            © {new Date().getFullYear()} {profile.name}
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium text-ink-sub">
                            <a
                                href={`mailto:${profile.email}`}
                                className="hover:text-ink"
                            >
                                {profile.email}
                            </a>
                            <a
                                href={whatsappUrl(profile.whatsapp)}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-ink"
                            >
                                WhatsApp
                            </a>
                            {profile.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-ink"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
