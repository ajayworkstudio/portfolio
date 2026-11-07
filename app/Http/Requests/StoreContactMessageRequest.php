<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Validasi form kontak. Laravel otomatis menjalankan rules() sebelum
 * controller dipanggil. Kalau gagal, user dikembalikan ke form beserta
 * pesan error per field (Inertia mengirimnya ke React sebagai form.errors).
 */
class StoreContactMessageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Form publik, siapa pun boleh mengirim.
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:150'],
            'project_type' => ['nullable', 'string', Rule::in(config('portfolio.project_types'))],
            'message' => ['required', 'string', 'min:10', 'max:2000'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Nama wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email belum benar.',
            'project_type.in' => 'Pilih salah satu jenis project.',
            'message.required' => 'Pesan wajib diisi.',
            'message.min' => 'Pesan minimal :min karakter.',
            'message.max' => 'Pesan maksimal :max karakter.',
        ];
    }
}
