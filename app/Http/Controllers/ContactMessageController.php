<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class ContactMessageController extends Controller
{
    public function store(StoreContactMessageRequest $request): RedirectResponse
    {
        // validated() hanya berisi field yang lolos rules(), jadi aman disimpan langsung.
        ContactMessage::create($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Pesan terkirim. Saya akan membalas secepatnya.']);

        return to_route('contact');
    }
}
