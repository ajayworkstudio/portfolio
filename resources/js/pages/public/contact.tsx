import { useForm } from '@inertiajs/react';
import { Minus, Plus } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Card, Headline, Tag, whatsappUrl } from '@/components/public/ui';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import type { Faq, Profile } from '@/types/portfolio';

type Props = {
    profile: Profile;
    faqs: Faq[];
    projectTypes: string[];
};

function formatPhone(raw: string): string {
    const local = raw.replace(/^62/, '');

    return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`;
}

const inputClass =
    'w-full rounded-xl border border-line bg-soft px-3.5 py-3 text-sm outline-none transition placeholder:text-ink-muted focus:border-ink/30 focus:bg-surface';

export default function Contact({ profile, faqs, projectTypes }: Props) {
    // useForm menyimpan isi form, status "sedang mengirim", dan error validasi dari Laravel.
    const form = useForm({
        name: '',
        email: '',
        project_type: projectTypes[0],
        message: '',
    });
    const [openFaq, setOpenFaq] = useState(0);
    const [copied, setCopied] = useState(false);

    const submit = (event: FormEvent) => {
        event.preventDefault();
        form.post('/contact', {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    };

    const copyEmail = async () => {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <PublicLayout profile={profile} title={`Kontak - ${profile.name}`}>
            <section className="pt-12 pb-3 sm:pt-14">
                <Tag>Kontak</Tag>
                <Headline
                    className="mt-4"
                    lines={[
                        { text: 'Ceritakan idemu,', muted: false },
                        { text: 'kita bangun bareng.', muted: true },
                    ]}
                />
            </section>

            <section className="mt-5 grid gap-4 lg:grid-cols-[1fr_347px]">
                <Card className="p-7">
                    <form onSubmit={submit} className="space-y-4">
                        <h2 className="text-[22px] font-semibold tracking-tight">
                            Kirim pesan
                        </h2>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <label className="space-y-1.5">
                                <span className="text-[13px] font-medium">
                                    Nama
                                </span>
                                <input
                                    className={inputClass}
                                    value={form.data.name}
                                    onChange={(e) =>
                                        form.setData('name', e.target.value)
                                    }
                                    placeholder="Nama kamu"
                                    autoComplete="name"
                                />
                                {form.errors.name && (
                                    <p className="text-xs text-red-600">
                                        {form.errors.name}
                                    </p>
                                )}
                            </label>
                            <label className="space-y-1.5">
                                <span className="text-[13px] font-medium">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    className={inputClass}
                                    value={form.data.email}
                                    onChange={(e) =>
                                        form.setData('email', e.target.value)
                                    }
                                    placeholder="nama@email.com"
                                    autoComplete="email"
                                />
                                {form.errors.email && (
                                    <p className="text-xs text-red-600">
                                        {form.errors.email}
                                    </p>
                                )}
                            </label>
                        </div>

                        <fieldset className="space-y-2">
                            <legend className="mb-2 text-[13px] font-medium">
                                Jenis project
                            </legend>
                            <div className="flex flex-wrap gap-2">
                                {projectTypes.map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() =>
                                            form.setData('project_type', type)
                                        }
                                        className={cn(
                                            'rounded-full px-3.5 py-2 text-[13px] font-medium transition',
                                            form.data.project_type === type
                                                ? 'bg-ink text-surface'
                                                : 'border border-line bg-surface text-ink-sub hover:text-ink',
                                        )}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                            {form.errors.project_type && (
                                <p className="text-xs text-red-600">
                                    {form.errors.project_type}
                                </p>
                            )}
                        </fieldset>

                        <label className="block space-y-1.5">
                            <span className="text-[13px] font-medium">
                                Pesan
                            </span>
                            <textarea
                                rows={6}
                                className={cn(inputClass, 'resize-y')}
                                value={form.data.message}
                                onChange={(e) =>
                                    form.setData('message', e.target.value)
                                }
                                placeholder="Ceritakan singkat masalah dan tujuan project-mu..."
                            />
                            {form.errors.message && (
                                <p className="text-xs text-red-600">
                                    {form.errors.message}
                                </p>
                            )}
                        </label>

                        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-ink-muted">
                                {profile.response_time}.
                            </p>
                            <button
                                type="submit"
                                disabled={form.processing}
                                className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-surface shadow-button transition hover:-translate-y-0.5 disabled:opacity-60"
                            >
                                {form.processing
                                    ? 'Mengirim...'
                                    : 'Kirim pesan'}
                            </button>
                        </div>
                    </form>
                </Card>

                <div className="space-y-4">
                    <Card className="flex items-center justify-between gap-3 p-[18px]">
                        <div className="min-w-0">
                            <p className="text-xs text-ink-muted">Email</p>
                            <p className="truncate text-sm font-medium">
                                {profile.email}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={copyEmail}
                            className="shrink-0 rounded-full bg-soft px-3 py-1.5 text-xs font-medium"
                        >
                            {copied ? 'Tersalin' : 'Salin'}
                        </button>
                    </Card>
                    <Card className="flex items-center justify-between gap-3 p-[18px]">
                        <div>
                            <p className="text-xs text-ink-muted">WhatsApp</p>
                            <p className="text-sm font-medium">
                                {formatPhone(profile.whatsapp)}
                            </p>
                        </div>
                        <a
                            href={whatsappUrl(
                                profile.whatsapp,
                                'Halo Fajar, saya mau diskusi project.',
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-soft px-3 py-1.5 text-xs font-medium"
                        >
                            Chat
                        </a>
                    </Card>
                    <Card className="p-[18px]">
                        <p className="text-xs text-ink-muted">Lokasi</p>
                        <p className="text-sm font-medium">
                            {profile.location} · WIB
                        </p>
                    </Card>

                    <Card className="p-[18px]">
                        <Tag>Pertanyaan umum</Tag>
                        <div className="mt-1.5 divide-y divide-line">
                            {faqs.map((faq, i) => (
                                <div key={faq.question} className="py-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(openFaq === i ? -1 : i)
                                        }
                                        className="flex w-full items-center justify-between gap-3 text-left text-sm font-medium"
                                        aria-expanded={openFaq === i}
                                    >
                                        {faq.question}
                                        {openFaq === i ? (
                                            <Minus className="h-4 w-4 shrink-0 text-ink-sub" />
                                        ) : (
                                            <Plus className="h-4 w-4 shrink-0 text-ink-sub" />
                                        )}
                                    </button>
                                    {openFaq === i && (
                                        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-sub">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </section>
        </PublicLayout>
    );
}
