<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Halaman publik portfolio. Kontennya dibaca dari config/portfolio.php.
 */
class PortfolioController extends Controller
{
    public function home(): Response
    {
        $projects = $this->projects();

        return Inertia::render('public/home', [
            'profile' => config('portfolio.profile'),
            'featured' => $projects->firstWhere('featured', true),
            'others' => $projects->where('featured', false)->take(4)->values(),
            'experience' => config('portfolio.experience'),
            'stack' => config('portfolio.stack'),
            'learning' => config('portfolio.learning'),
            'process' => config('portfolio.process'),
        ]);
    }

    public function projectIndex(): Response
    {
        return Inertia::render('public/projects/index', [
            'profile' => config('portfolio.profile'),
            'projects' => $this->projects(),
        ]);
    }

    public function projectShow(string $slug): Response
    {
        $projects = $this->projects();
        $index = $projects->search(fn (array $project) => $project['slug'] === $slug);

        abort_if($index === false, 404);

        // Project berikutnya untuk tombol di bawah halaman (kembali ke awal setelah yang terakhir).
        $next = $projects[($index + 1) % $projects->count()];

        return Inertia::render('public/projects/show', [
            'profile' => config('portfolio.profile'),
            'project' => $projects[$index],
            'next' => ['slug' => $next['slug'], 'title' => $next['title']],
        ]);
    }

    public function about(): Response
    {
        $stats = [
            ['value' => (string) $this->projects()->count(), 'label' => 'project dibangun'],
            ...config('portfolio.stats'),
        ];

        return Inertia::render('public/about', [
            'profile' => config('portfolio.profile'),
            'stats' => $stats,
            'values' => config('portfolio.values'),
            'experience' => config('portfolio.experience'),
            'skills' => config('portfolio.skills'),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('public/contact', [
            'profile' => config('portfolio.profile'),
            'faqs' => config('portfolio.faqs'),
            'projectTypes' => config('portfolio.project_types'),
        ]);
    }

    /**
     * @return Collection<int, array<string, mixed>>
     */
    private function projects(): Collection
    {
        return collect(config('portfolio.projects'))->values();
    }
}
