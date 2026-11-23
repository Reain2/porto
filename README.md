# Portofolio Web - Samuel Rain Gunawan

Website portofolio statis resmi untuk **Samuel Rain Gunawan** (Siswa Rekayasa Perangkat Lunak SMK Cinta Kasih Tzu Chi). Berisi riwayat pendidikan, pengalaman kerja (DAAI TV, Zenbu Head Office), kepemimpinan ROHKRIS, prestasi kompetisi (LKS WebDev, Technofest Agentic AI, JDSC Binus), dan portofolio karya.

---

## 📁 Struktur Berkas

```text
PortofolioWeb/
├── .gitignore          # Mengabaikan agent-files/, file log, dan cache sistem
├── README.md           # Panduan penggunaan & informasi repo
├── index.html          # Markup semantik struktur web portofolio
├── style.css           # Styling modern & responsif (dark theme)
├── script.js           # Interaktivitas minimal
└── assets/
    └── images/         # Folder aset gambar & foto
        └── README.txt  # Petunjuk penempatan foto
```

---

## 🖼️ Cara Menambahkan Foto / Gambar

Cukup salin berkas gambar Anda ke dalam folder `assets/images/`:
1. **Foto Profil:** Simpan dengan nama `profile.jpg` (akan otomatis menggantikan inisial `SRG`).
2. **Karya / Thumbnail Lainnya:** Simpan ke folder yang sama jika ingin menautkannya ke elemen kartu proyek.

---

## 🚀 Menjalankan Secara Lokal

Buka file `index.html` langsung di browser favorit Anda, atau jalankan local server sederhana:

```bash
# Menggunakan python built-in server (opsional)
python3 -m http.server 8000
```
Lalu buka `http://localhost:8000` di browser.

---

## 📌 Cara Push ke GitHub

Untuk mengunggah portofolio ini ke repositori GitHub pribadi:

1. Buat repository baru di GitHub (misal: `portfolio` atau `username.github.io`).
2. Jalankan perintah berikut di terminal:
```bash
git remote add origin https://github.com/<username-anda>/<nama-repo>.git
git branch -M main
git push -u origin main
```
3. Aktifkan **GitHub Pages** di menu *Settings > Pages* pada repo GitHub untuk hosting online gratis.
