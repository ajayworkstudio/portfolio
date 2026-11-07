<?php

/*
|--------------------------------------------------------------------------
| Konten portfolio
|--------------------------------------------------------------------------
|
| Semua teks website portfolio ada di file ini, jadi kamu bisa mengedit
| konten tanpa menyentuh controller atau React. Baca di kode dengan
| config('portfolio.profile'), config('portfolio.projects'), dst.
|
| Nanti bagian "projects" bisa dipindah ke database (Migration + Eloquent)
| supaya bisa diedit dari panel admin.
|
*/

return [

    'profile' => [
        'name' => 'Fajar Maulana',
        'nickname' => 'Ajay',
        'role' => 'Fullstack Developer',
        'location' => 'Semarang, Jawa Tengah',
        'timezone' => 'Asia/Jakarta',
        'available' => true,
        'availability' => 'Terbuka untuk project',
        'response_time' => 'Biasanya membalas dalam 1 hari kerja',
        'headline' => [
            ['text' => 'Fajar Maulana,', 'muted' => false],
            ['text' => 'fullstack developer yang', 'muted' => true],
            ['text' => 'suka membangun hal berguna.', 'muted' => false],
        ],
        'intro' => 'Berlatar Teknik Elektro. Saya membangun web app, dashboard, bot, sampai perangkat IoT dari Semarang.',
        'bio' => [
            'Saya mulai ngoding karena butuh alat untuk pekerjaan saya sendiri: mengecek coverage jaringan, mencari kontak calon pelanggan, dan memantau data penjualan.',
            'Latar Teknik Elektro membuat saya nyaman bekerja dari hardware sampai aplikasi web. Pengalaman di dunia sales membuat saya paham bahwa fitur harus berujung pada hasil bisnis.',
            'Sekarang saya mendalami Laravel dan React untuk membangun produk fullstack yang rapi dan mudah dirawat.',
        ],
        'photo' => null, // contoh: '/images/fajar.jpg' (taruh file di folder public/images)
        'email' => 'fajarmaulanawork@gmail.com',
        'whatsapp' => '6281339646353',
        'socials' => [
            ['label' => 'GitHub', 'url' => 'https://github.com/ajayworkstudio'],
            // ['label' => 'LinkedIn', 'url' => 'https://www.linkedin.com/in/...'],
        ],
    ],

    'learning' => [
        'title' => 'Laravel 13 + React',
        'description' => 'Belajar fullstack dengan membangun portfolio ini sendiri.',
        'current' => 2,
        'total' => 9,
        'topic' => 'Routing & Controller',
    ],

    'stats' => [
        ['value' => '3', 'label' => 'wilayah usaha reseller'],
        ['value' => '2024', 'label' => 'mulai di PLN Icon Plus'],
    ],

    'stack' => [
        'Laravel', 'PHP', 'React', 'TypeScript', 'Tailwind', 'Inertia',
        'Next.js', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'ESP32',
    ],

    'skills' => [
        ['group' => 'Backend', 'items' => ['Laravel', 'PHP', 'FastAPI', 'PostgreSQL']],
        ['group' => 'Frontend', 'items' => ['React', 'TypeScript', 'Tailwind', 'Next.js']],
        ['group' => 'Hardware & lainnya', 'items' => ['ESP32', 'Python', 'Supabase', 'Vercel']],
    ],

    'experience' => [
        ['title' => 'Senior Account Executive', 'place' => 'PLN Icon Plus', 'period' => '2024 — kini', 'current' => true],
        ['title' => 'Founder, reseller internet', 'place' => 'Yogyakarta · Semarang · Purwokerto', 'period' => 'Berjalan', 'current' => false],
        ['title' => 'S1 Teknik Elektro', 'place' => 'Universitas Muhammadiyah Semarang', 'period' => 'Berjalan', 'current' => false],
    ],

    'values' => [
        ['title' => 'Mulai dari masalah', 'description' => 'Kode ditulis untuk menyelesaikan sesuatu, bukan sekadar terlihat canggih.'],
        ['title' => 'Rilis bertahap', 'description' => 'Versi sederhana yang dipakai lebih baik daripada versi sempurna yang tidak pernah jadi.'],
        ['title' => 'Jelas & terbuka', 'description' => 'Progres rutin, keputusan teknis dijelaskan dengan bahasa yang mudah dipahami.'],
    ],

    'process' => [
        ['title' => 'Diskusi', 'description' => 'Petakan masalah dan lingkup.'],
        ['title' => 'Bangun', 'description' => 'Bertahap, progres rutin.'],
        ['title' => 'Rilis', 'description' => 'Deploy dan penyesuaian.'],
    ],

    'faqs' => [
        ['question' => 'Berapa lama satu project?', 'answer' => 'Landing page biasanya 1-2 minggu, web app dengan login dan dashboard 1-2 bulan. Estimasi pasti saya berikan setelah diskusi awal.'],
        ['question' => 'Bisa lanjutkan aplikasi lama?', 'answer' => 'Bisa. Saya pelajari dulu kode dan kebutuhannya, lalu kita sepakati bagian mana yang diperbaiki atau dikembangkan.'],
        ['question' => 'Siapa pemilik kodenya?', 'answer' => 'Kamu. Setelah project selesai, seluruh kode dan aksesnya diserahkan ke kamu.'],
    ],

    'project_types' => ['Web app', 'Landing page', 'Dashboard', 'Bot / otomasi', 'Lainnya'],

    /*
    | group: dipakai filter di halaman Project -> web | iot | automation
    | tagline: baris kedua (abu-abu) headline di halaman case study.
    | Field problem/solution/features/learning boleh null. Bagian yang null
    | tidak ditampilkan di halaman case study.
    */
    'projects' => [
        [
            'slug' => 'wfc-hunters',
            'title' => 'WFC Hunters',
            'category' => 'Web App / PWA',
            'tagline' => 'kurasi kafe untuk kerja.',
            'group' => 'web',
            'year' => '2026',
            'featured' => true,
            'summary' => 'Platform kurasi kafe yang nyaman untuk kerja di kota-kota besar Pulau Jawa, dengan rekomendasi menu dari para kurator.',
            'stack' => ['PWA', 'Supabase', 'Vercel'],
            'url' => 'https://wfchunters.com',
            'role' => 'Founder & Developer',
            'status' => 'Live, terus berkembang',
            'problem' => 'Mencari kafe untuk kerja itu untung-untungan: Wi-Fi lambat, colokan sedikit, atau terlalu ramai. Ulasan umum jarang membahas hal-hal ini.',
            'solution' => 'Kurasi oleh "kurator" yang benar-benar kerja di sana, dengan informasi yang relevan untuk pekerja: koneksi, colokan, suasana, dan menu rekomendasi.',
            'features' => [
                ['title' => 'Kurasi per kota', 'description' => 'Kota besar Pulau Jawa diprioritaskan lebih dulu.'],
                ['title' => 'Profil kurator', 'description' => 'Kontributor menulis rekomendasi dari pengalaman sendiri.'],
                ['title' => 'PWA ringan', 'description' => 'Dibuka seperti aplikasi, tanpa perlu install dari store.'],
            ],
            'learning' => 'Membangun produk sendiri mengajarkan bahwa komunitas sama pentingnya dengan kode. Fitur pertama yang paling berguna justru yang paling sederhana: daftar kafe yang bisa dipercaya.',
        ],
        [
            'slug' => 'remira',
            'title' => 'Remira',
            'category' => 'Mobile-first PWA',
            'tagline' => 'pengingat untuk mahasiswa kedokteran.',
            'group' => 'web',
            'year' => '2026',
            'featured' => false,
            'summary' => 'Pengingat dan catatan untuk mahasiswa kedokteran, dirancang iPhone-first supaya terasa seperti aplikasi native.',
            'stack' => ['Next.js', 'Supabase', 'Vercel'],
            'url' => null,
            'role' => 'Developer',
            'status' => 'Dalam pengembangan',
            'problem' => null,
            'solution' => null,
            'features' => [],
            'learning' => null,
        ],
        [
            'slug' => 'epialert-32',
            'title' => 'EpiAlert-32',
            'category' => 'IoT / Embedded',
            'tagline' => 'peringatan dini kejang.',
            'group' => 'iot',
            'year' => '2026',
            'featured' => false,
            'summary' => 'Capstone design: alat peringatan kejang berbasis sinyal EEG. Klasifikasi SVM di laptop, ESP32 mengendalikan display dan alarm.',
            'stack' => ['ESP32', 'Python', 'SVM'],
            'url' => null,
            'role' => 'Anggota tim capstone',
            'status' => 'Dalam pengembangan',
            'problem' => null,
            'solution' => null,
            'features' => [],
            'learning' => null,
        ],
        [
            'slug' => 'coverage-checker',
            'title' => 'Coverage Checker',
            'category' => 'Web App / API',
            'tagline' => 'cek jangkauan jaringan.',
            'group' => 'web',
            'year' => '2026',
            'featured' => false,
            'summary' => 'Halaman rekrutmen marketer internet fiber dengan API cek jangkauan jaringan untuk calon pelanggan.',
            'stack' => ['JavaScript', 'API', 'Vercel'],
            'url' => null,
            'role' => 'Developer',
            'status' => 'Dipakai internal',
            'problem' => null,
            'solution' => null,
            'features' => [],
            'learning' => null,
        ],
        [
            'slug' => 'whatsapp-faq-bot',
            'title' => 'WhatsApp FAQ Bot',
            'category' => 'AI Automation',
            'tagline' => 'asisten WhatsApp otomatis.',
            'group' => 'automation',
            'year' => '2026',
            'featured' => false,
            'summary' => 'Bot WhatsApp berbasis AI untuk menjawab pertanyaan pelanggan dan follow-up calon pelanggan secara otomatis.',
            'stack' => ['Python', 'FastAPI', 'WhatsApp API'],
            'url' => null,
            'role' => 'Developer',
            'status' => 'Dalam pengembangan',
            'problem' => null,
            'solution' => null,
            'features' => [],
            'learning' => null,
        ],
        [
            'slug' => 'money-management',
            'title' => 'Money Management',
            'category' => 'Web App',
            'tagline' => 'catatan keuangan harian.',
            'group' => 'web',
            'year' => '2026',
            'featured' => false,
            'summary' => 'Aplikasi pencatatan keuangan pribadi yang responsif di mobile.',
            'stack' => ['JavaScript', 'Vercel'],
            'url' => null,
            'role' => 'Developer',
            'status' => 'Live',
            'problem' => null,
            'solution' => null,
            'features' => [],
            'learning' => null,
        ],
    ],

];
