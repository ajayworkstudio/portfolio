<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PortfolioTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_pages_render_the_right_components(): void
    {
        $pages = [
            '/' => 'public/home',
            '/projects' => 'public/projects/index',
            '/projects/wfc-hunters' => 'public/projects/show',
            '/about' => 'public/about',
            '/contact' => 'public/contact',
        ];

        foreach ($pages as $url => $component) {
            $this->get($url)
                ->assertOk()
                ->assertInertia(fn (Assert $page) => $page->component($component)->has('profile'));
        }
    }

    public function test_project_page_shows_the_requested_project(): void
    {
        $this->get('/projects/wfc-hunters')
            ->assertInertia(fn (Assert $page) => $page
                ->where('project.title', 'WFC Hunters')
                ->has('next.slug'));
    }

    public function test_unknown_project_returns_404(): void
    {
        $this->get('/projects/tidak-ada')->assertNotFound();
    }

    public function test_contact_message_is_stored(): void
    {
        $this->post('/contact', [
            'name' => 'Budi',
            'email' => 'budi@example.com',
            'project_type' => 'Web app',
            'message' => 'Halo, saya mau bikin aplikasi kasir untuk toko.',
        ])->assertRedirect('/contact');

        $this->assertDatabaseHas(ContactMessage::class, ['email' => 'budi@example.com']);
    }

    public function test_contact_message_is_validated(): void
    {
        $this->post('/contact', ['name' => '', 'email' => 'bukan-email', 'message' => 'pendek'])
            ->assertSessionHasErrors(['name', 'email', 'message']);

        $this->assertDatabaseCount(ContactMessage::class, 0);
    }
}
