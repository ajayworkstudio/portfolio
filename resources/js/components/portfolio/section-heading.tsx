import type { ReactNode } from 'react';

type Props = {
    index: string;
    label: string;
    children: ReactNode;
    aside?: ReactNode;
};

/**
 * Judul section dengan label monospace bernomor, contoh: [02] PROJECTS
 */
export default function SectionHeading({
    index,
    label,
    children,
    aside,
}: Props) {
    return (
        <div className="mb-12 flex flex-col gap-6 border-t border-ink pt-6 md:flex-row md:items-end md:justify-between">
            <div>
                <p className="font-mono text-xs tracking-widest text-ink/60 uppercase">
                    [{index}] {label}
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
                    {children}
                </h2>
            </div>
            {aside && <div className="max-w-sm text-ink/70">{aside}</div>}
        </div>
    );
}
