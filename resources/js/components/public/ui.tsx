import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { HeadlineLine } from '@/types/portfolio';

/**
 * Komponen-komponen kecil yang dipakai di semua halaman publik.
 * Namanya sama dengan komponen di Figma (Soft/Tag, Soft/Pill, Soft/Button, ...).
 */

export function Tag({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex w-fit items-center rounded-full border border-line bg-soft px-2.5 py-1 text-[11px] font-medium text-ink-sub">
            {children}
        </span>
    );
}

export function Pill({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex rounded-[10px] border border-line bg-surface px-3 py-1.5 text-[13px] font-medium">
            {children}
        </span>
    );
}

export function StatusBadge({
    label,
    active = true,
}: {
    label: string;
    active?: boolean;
}) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink">
            <span
                className={cn(
                    'h-2 w-2 rounded-full',
                    active
                        ? 'bg-emerald-500 ring-[3px] ring-emerald-500/25'
                        : 'bg-ink-muted',
                )}
            />
            {label}
        </span>
    );
}

type ButtonProps = {
    href: string;
    children: ReactNode;
    variant?: 'dark' | 'light';
    external?: boolean;
    className?: string;
};

/**
 * Tombol berbentuk link. Link internal memakai <Link> Inertia (pindah halaman
 * tanpa reload), link eksternal (WhatsApp, website) memakai <a> biasa.
 */
export function ButtonLink({
    href,
    children,
    variant = 'dark',
    external = false,
    className,
}: ButtonProps) {
    const classes = cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5',
        variant === 'dark'
            ? 'bg-ink text-surface shadow-button'
            : 'border border-line bg-surface text-ink hover:border-ink/20',
        className,
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={classes}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}

export function Card({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'rounded-[22px] border border-line bg-surface p-5 shadow-soft',
                className,
            )}
        >
            {children}
        </div>
    );
}

/** Headline dua warna: baris dengan muted=true ditampilkan abu-abu. */
export function Headline({
    lines,
    className,
}: {
    lines: HeadlineLine[];
    className?: string;
}) {
    return (
        <h1
            className={cn(
                'text-[2.25rem] leading-[1.12] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]',
                className,
            )}
        >
            {lines.map((line) => (
                <span
                    key={line.text}
                    className={cn('block', line.muted && 'text-ink-muted')}
                >
                    {line.text}
                </span>
            ))}
        </h1>
    );
}

/** Kotak inisial, dipakai sebagai pengganti logo/gambar project. */
export function Mark({
    text,
    size = 'md',
    highlight = false,
}: {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    highlight?: boolean;
}) {
    const initials = text
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <span
            className={cn(
                'inline-flex shrink-0 items-center justify-center border border-line bg-surface font-semibold tracking-tight',
                size === 'sm' && 'h-10 w-10 rounded-xl text-sm',
                size === 'md' && 'h-11 w-11 rounded-xl text-base',
                size === 'lg' &&
                    'h-[72px] w-[72px] rounded-[18px] text-2xl shadow-soft',
                highlight ? 'text-brand' : 'text-ink',
            )}
        >
            {initials}
        </span>
    );
}

export function whatsappUrl(number: string, text?: string): string {
    return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}
