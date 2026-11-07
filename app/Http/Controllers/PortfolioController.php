<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $projects = [
            [
                'title' => 'WFC Hunters',
                'category' => 'Web App / PWA',
                'description' => 'Kurasi kafe yang nyaman untuk kerja di kota-kota besar Pulau Jawa.',
                'stack' => ['Next.js', 'Supabase'],
            ],
            [
                'title' => 'EpiAlert-32',
                'category' => 'IoT / Embedded',
                'description' => 'Alat deteksi dan peringatan kejang berbasis EEG dan ESP32.',
                'stack' => ['ESP32', 'C++'],
            ],
        ];

        return Inertia::render('portfolio', [
            'projects' => $projects,
        ]);
    }
}