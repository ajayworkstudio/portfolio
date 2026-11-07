<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Pesan yang masuk dari form kontak di halaman /contact.
 */
class ContactMessage extends Model
{
    /**
     * Kolom yang boleh diisi lewat ContactMessage::create([...]).
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'project_type',
        'message',
    ];
}
