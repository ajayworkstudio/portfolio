import { useEffect, useState } from 'react';

function formatTime(timezone: string): string {
    return new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: timezone,
    })
        .format(new Date())
        .replace('.', ':');
}

/**
 * Jam lokal yang berjalan. Saat render di server (SSR) jam belum ditampilkan,
 * baru diisi setelah halaman tampil di browser. Ini mencegah "hydration mismatch"
 * karena waktu server dan browser bisa beda beberapa detik.
 */
export default function LocalTime({ timezone }: { timezone: string }) {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const update = () => setTime(formatTime(timezone));
        update();
        const id = setInterval(update, 30_000);

        return () => clearInterval(id);
    }, [timezone]);

    return <span suppressHydrationWarning>{time ?? '--:--'}</span>;
}
