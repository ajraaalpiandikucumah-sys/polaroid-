# Polaroid Memories

> Untuk Jasmine.
> Karena beberapa kenangan terlalu indah untuk dilupakan.

Sebuah album kenangan interaktif, dibangun dengan React 19, Vite, Tailwind CSS, Framer Motion, GSAP, dan Lenis smooth scroll.

## Struktur Proyek

```
src/
  components/
    intro/      -> sekuens pembuka (kilatan kamera, foto jatuh, teks pembuka)
    layout/     -> background meja, properti dekoratif, header, footer
    polaroid/   -> kartu polaroid, dekorasi selotip/jepitan, modal cerita
    ui/         -> komponen UI kecil yang reusable (scroll hint, dll)
  context/      -> MemoryContext (status intro & cerita yang sedang dibuka)
  data/         -> photos.js (seluruh foto + judul + isi cerita)
  hooks/        -> useLenis, useIntroSequence, useShutterSound
  pages/        -> HomePage.jsx (komposer seluruh halaman)
  styles/       -> globals.css (Tailwind + tekstur kayu/kertas)
  utils/        -> scatter.js (posisi & delay polaroid yang konsisten)
public/photos/  -> file foto asli
```

## Menjalankan di Komputer

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Untuk build produksi:

```bash
npm run build
npm run preview
```

## Menjalankan Tanpa Laptop (dari HP)

Karena proyek ini butuh Node.js untuk di-build, kamu tidak bisa langsung membuka file HTML dari HP. Tiga cara termudah dari HP:

1. **StackBlitz** (paling gampang) — buka [stackblitz.com](https://stackblitz.com) lewat browser HP, buat proyek baru "Import from ZIP" atau upload folder ini, StackBlitz otomatis menjalankan `npm install` dan `npm run dev` di cloud, langsung ada preview live.
2. **GitHub + Netlify** — upload folder ini ke repository GitHub lewat browser HP, lalu hubungkan repo itu ke [netlify.com](https://netlify.com) (build command: `npm run build`, publish directory: `dist`). Netlify akan build otomatis setiap kali ada perubahan.
3. **Netlify Drop** (kalau sudah ada hasil build `dist/` dari komputer lain) — tinggal drag folder `dist` ke [netlify.com/drop](https://netlify.com/drop), langsung online.

## Kustomisasi

- **Foto & cerita**: edit `src/data/photos.js`.
- **Warna & font**: edit token di `tailwind.config.js`.
- **Timing sekuens pembuka**: konstanta di `src/hooks/useIntroSequence.js`.
- **Properti dekoratif meja**: daftar di `src/components/layout/DeskProps.jsx`.
