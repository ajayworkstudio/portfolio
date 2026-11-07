# Auto pull: cek GitHub secara berkala dan tarik perubahan baru ke folder lokal.
#
# Cara pakai (dari folder project, di terminal terpisah dari `composer run dev`):
#   powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1
#   powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1 -Interval 60
#
# Aman untuk kerja lokal: script TIDAK akan pull kalau
#   - kamu sedang di branch lain (bukan -Branch),
#   - ada file yang kamu ubah tapi belum di-commit,
#   - kamu punya commit lokal yang belum di-push (histori bercabang).

param(
    [int]$Interval = 30,
    [string]$Branch = 'main'
)

$ErrorActionPreference = 'Continue'
Set-Location (Split-Path -Parent $PSScriptRoot)

function Log([string]$Message, [string]$Color = 'Gray') {
    Write-Host ("[{0}] {1}" -f (Get-Date -Format 'HH:mm:ss'), $Message) -ForegroundColor $Color
}

Log "Auto pull aktif: cek origin/$Branch tiap $Interval detik. Tekan Ctrl+C untuk berhenti." 'Cyan'

while ($true) {
    git fetch --quiet origin $Branch 2>$null
    if ($LASTEXITCODE -ne 0) {
        Log 'Gagal fetch (cek koneksi internet / login GitHub). Coba lagi nanti.' 'Yellow'
        Start-Sleep -Seconds $Interval
        continue
    }

    $local = (git rev-parse HEAD).Trim()
    $remote = (git rev-parse "origin/$Branch").Trim()

    if ($local -ne $remote) {
        $current = (git rev-parse --abbrev-ref HEAD).Trim()
        $dirty = git status --porcelain --untracked-files=no

        # Remote harus "di depan" lokal. Kalau tidak, berarti kamu punya commit yang belum di-push.
        git merge-base --is-ancestor HEAD "origin/$Branch"
        $remoteIsAhead = ($LASTEXITCODE -eq 0)

        if ($current -ne $Branch) {
            Log "Ada update di origin/$Branch, tapi kamu sedang di branch '$current'. Dilewati." 'Yellow'
        }
        elseif ($dirty) {
            Log 'Ada update, tapi ada perubahan lokal yang belum di-commit. Commit dulu, nanti otomatis ditarik.' 'Yellow'
        }
        elseif (-not $remoteIsAhead) {
            Log 'Kamu punya commit lokal yang belum di-push. Jalankan `git push` atau `git pull` manual.' 'Yellow'
        }
        else {
            $changed = @(git diff --name-only HEAD "origin/$Branch")
            git merge --ff-only --quiet "origin/$Branch"

            if ($LASTEXITCODE -eq 0) {
                Log ("Berhasil pull {0} file berubah:" -f $changed.Count) 'Green'
                $changed | ForEach-Object { Log "  - $_" }

                if ($changed -contains 'composer.lock') {
                    Log 'composer.lock berubah, menjalankan composer install...' 'Cyan'
                    composer install
                }
                if ($changed -contains 'package-lock.json') {
                    Log 'package-lock.json berubah, menjalankan npm install...' 'Cyan'
                    npm install
                }
                if (@($changed | Where-Object { $_ -like 'database/migrations/*' }).Count -gt 0) {
                    Log 'Ada migration baru, menjalankan php artisan migrate...' 'Cyan'
                    php artisan migrate
                }
            }
            else {
                Log 'Pull gagal. Jalankan `git status` untuk melihat masalahnya.' 'Red'
            }
        }
    }

    Start-Sleep -Seconds $Interval
}
