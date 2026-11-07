<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

/**
 * Halaman portfolio publik.
 *
 * Untuk sekarang semua konten masih ditulis di sini (hardcode).
 * Di pelajaran berikutnya, data ini dipindah ke database lewat Migration + Eloquent,
 * lalu bisa diedit dari panel admin tanpa menyentuh kode.
 */
class PortfolioController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('portfolio', [
            'profile' => $this->profile(),
            'projects' => $this->projects(),
            'services' => $this->services(),
            'stack' => $this->stack(),
            'experience' => $this->experience(),
            'process' => $this->process(),
            'faqs' => $this->faqs(),
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function profile(): array
    {
        return [
            'name' => 'Fajar Maulana',
            'nickname' => 'Ajay',
            'role' => 'Fullstack Developer',
            'location' => 'Semarang, Jawa Tengah',
            'available' => true,
            'availability' => 'Terbuka untuk project baru',
            'headline' => 'Saya membangun software yang dipakai untuk masalah nyata.',
            'intro' => 'Fullstack developer berlatar Teknik Elektro. Saya mengerjakan web app, dashboard, bot, sampai perangkat IoT, dan terbiasa menjembatani kebutuhan bisnis dengan solusi teknis.',
            'bio' => [
                'Saya mulai ngoding karena butuh alat untuk pekerjaan saya sendiri: mengecek coverage jaringan, mencari kontak calon pelanggan, dan memantau data penjualan. Dari situ saya sadar software yang paling berguna adalah yang lahir dari masalah nyata.',
                'Latar Teknik Elektro membuat saya nyaman bekerja dari level hardware sampai aplikasi web. Di sisi lain, pengalaman di dunia sales membuat saya paham bahwa fitur harus berujung pada hasil bisnis.',
                'Sekarang saya fokus mendalami Laravel dan React untuk membangun produk fullstack yang rapi, cepat, dan mudah dirawat.',
            ],
            'email' => 'fajarmaulanawork@gmail.com',
            'whatsapp' => '6281339646353',
            'socials' => [
                ['label' => 'GitHub', 'url' => 'https://github.com/ajayworkstudio'],
            ],
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function projects(): array
    {
        return [
            [
                'title' => 'WFC Hunters',
                'category' => 'Web App / PWA',
                'year' => '2026',
                'description' => 'Platform kurasi kafe yang nyaman untuk kerja di kota-kota besar Pulau Jawa, lengkap dengan rekomendasi menu dari para kurator.',
                'stack' => ['PWA', 'Supabase', 'Vercel'],
                'url' => 'https://wfchunters.com',
            ],
            [
                'title' => 'Remira',
                'category' => 'Mobile-first PWA',
                'year' => '2026',
                'description' => 'Aplikasi pengingat dan catatan untuk mahasiswa kedokteran. Dirancang iPhone-first supaya terasa seperti aplikasi native.',
                'stack' => ['Next.js', 'Supabase', 'Vercel'],
                'url' => null,
            ],
            [
                'title' => 'EpiAlert-32',
                'category' => 'IoT / Embedded',
                'year' => '2026',
                'description' => 'Capstone design: alat peringatan kejang berbasis sinyal EEG. Klasifikasi SVM di laptop, ESP32 mengendalikan display dan alarm.',
                'stack' => ['ESP32', 'Python', 'SVM'],
                'url' => null,
            ],
            [
                'title' => 'Coverage Checker',
                'category' => 'Web App / API',
                'year' => '2026',
                'description' => 'Halaman rekrutmen marketer internet fiber dengan API cek coverage yang membaca peta jaringan, jadi calon pelanggan tahu area mereka sudah terjangkau atau belum.',
                'stack' => ['JavaScript', 'API', 'Vercel'],
                'url' => null,
            ],
            [
                'title' => 'WhatsApp FAQ Bot',
                'category' => 'AI Automation',
                'year' => '2026',
                'description' => 'Bot WhatsApp berbasis AI untuk menjawab pertanyaan pelanggan dan follow-up calon pelanggan secara otomatis.',
                'stack' => ['Python', 'FastAPI', 'WhatsApp API'],
                'url' => null,
            ],
            [
                'title' => 'Money Management',
                'category' => 'Web App',
                'year' => '2026',
                'description' => 'Aplikasi pencatatan keuangan pribadi yang responsif di mobile, untuk melacak pemasukan dan pengeluaran harian.',
                'stack' => ['PHP', 'JavaScript', 'Vercel'],
                'url' => null,
            ],
        ];
    }

    /**
     * @return list<array<string, string>>
     */
    private function services(): array
    {
        return [
            ['title' => 'Web App', 'description' => 'Aplikasi web lengkap: login, database, dashboard, dan integrasi API.'],
            ['title' => 'Landing Page', 'description' => 'Halaman promosi cepat dan rapi yang dirancang untuk konversi.'],
            ['title' => 'Dashboard & Data', 'description' => 'Monitoring pelanggan, penjualan, atau data lapangan dalam satu layar.'],
            ['title' => 'Bot & Otomasi', 'description' => 'Bot WhatsApp dan otomasi alur kerja supaya tim tidak mengerjakan hal berulang.'],
            ['title' => 'IoT Prototype', 'description' => 'Prototipe perangkat berbasis ESP32 yang terhubung ke aplikasi.'],
        ];
    }

    /**
     * @return list<string>
     */
    private function stack(): array
    {
        return [
            'Laravel', 'PHP', 'React', 'TypeScript', 'Tailwind CSS', 'Inertia.js',
            'Next.js', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'ESP32',
        ];
    }

    /**
     * @return list<array<string, string>>
     */
    private function experience(): array
    {
        return [
            ['place' => 'PLN Icon Plus', 'role' => 'Senior Account Executive', 'period' => '2024 - sekarang'],
            ['place' => 'Universitas Muhammadiyah Semarang', 'role' => 'S1 Teknik Elektro', 'period' => 'Sedang berjalan'],
        ];
    }

    /**
     * @return list<array<string, string>>
     */
    private function process(): array
    {
        return [
            ['title' => 'Diskusi', 'description' => 'Ceritakan masalah dan tujuanmu. Kita tentukan lingkup, prioritas, dan target waktu.'],
            ['title' => 'Bangun', 'description' => 'Saya kerjakan bertahap dan kirim progres rutin, jadi kamu bisa memberi masukan sejak awal.'],
            ['title' => 'Rilis', 'description' => 'Aplikasi di-deploy, diuji bersama, dan saya bantu penyesuaian setelah rilis.'],
        ];
    }

    /**
     * @return list<array<string, string>>
     */
    private function faqs(): array
    {
        return [
            ['question' => 'Berapa lama satu project selesai?', 'answer' => 'Tergantung kompleksitas. Landing page biasanya 1-2 minggu, web app dengan login dan dashboard bisa 1-2 bulan. Estimasi pasti saya berikan setelah diskusi awal.'],
            ['question' => 'Bisa melanjutkan aplikasi yang sudah ada?', 'answer' => 'Bisa. Saya pelajari dulu kode dan kebutuhannya, lalu kita sepakati bagian mana yang diperbaiki atau dikembangkan.'],
            ['question' => 'Teknologi apa yang dipakai?', 'answer' => 'Default saya Laravel + React untuk web app, tapi pilihan akhirnya mengikuti kebutuhan project dan tim yang akan merawatnya.'],
            ['question' => 'Apakah ada dukungan setelah project selesai?', 'answer' => 'Ada masa dukungan untuk perbaikan bug setelah rilis. Untuk pengembangan lanjutan bisa disepakati terpisah.'],
            ['question' => 'Siapa pemilik kode dan aplikasinya?', 'answer' => 'Kamu. Setelah project selesai dan dibayar, seluruh kode dan aksesnya diserahkan ke kamu.'],
        ];
    }
}
