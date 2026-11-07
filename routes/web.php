<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Halaman publik portfolio
Route::get('/', [PortfolioController::class, 'home'])->name('home');
Route::get('/projects', [PortfolioController::class, 'projectIndex'])->name('projects.index');
Route::get('/projects/{slug}', [PortfolioController::class, 'projectShow'])
    ->where('slug', '[a-z0-9-]+')
    ->name('projects.show');
Route::get('/about', [PortfolioController::class, 'about'])->name('about');
Route::get('/contact', [PortfolioController::class, 'contact'])->name('contact');
Route::post('/contact', [ContactMessageController::class, 'store'])
    ->middleware('throttle:5,1') // maksimal 5 kiriman per menit per IP, untuk menahan spam
    ->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
