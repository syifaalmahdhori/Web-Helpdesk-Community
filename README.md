# 🧩 Web Helpdesk Community

![Helpdesk Preview](image/icon_helpdesk.png)

**Web Helpdesk Community** adalah aplikasi berbasis web yang dirancang untuk membantu perusahaan atau organisasi dalam menangani laporan masalah (tiket) internal secara efisien.  
Aplikasi ini dibuat dengan antarmuka modern, responsif, dan mudah digunakan — cocok untuk tim IT Support, Admin, dan seluruh departemen yang membutuhkan sistem pelaporan terpusat.

🌐 **Live Demo:** [Klik di sini](https://syifaalmahdhori.github.io/Web-Helpdesk-Community/)

---

## 🚀 Fitur Utama

- **Dashboard interaktif**  
  Menampilkan ringkasan jumlah tiket, status, dan distribusi kategori dalam bentuk chart.
  
- **Create Ticket Form**  
  Pengguna dapat membuat tiket baru dengan kategori, deskripsi, dan penanggung jawab.
  
- **Daftar Tiket**  
  Tampilan tabel dinamis berisi seluruh tiket yang masuk, dilengkapi dengan kolom status dan assigned team.
  
- **Manajemen Agent**  
  Tambah, ubah, dan hapus agent secara langsung melalui tabel interaktif dan modal form.
  
- **Account & Settings**  
  Kelola profil pengguna, buat akun baru, ubah preferensi tampilan (tema, notifikasi, bahasa), dan opsi logout.
  
- **Responsive Design**  
  Didesain agar tampil optimal di desktop maupun perangkat mobile.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Deskripsi |
|------------|------------|
| **HTML5 & CSS3** | Struktur dan tampilan utama |
| **Bootstrap 5.3** | Framework UI responsif |
| **JavaScript (Vanilla)** | Interaktivitas form, sidebar, dan animasi |
| **Chart.js** | Visualisasi data tiket |
| **LocalStorage** | Penyimpanan preferensi pengguna lokal |
| **GitHub Pages** | Hosting gratis untuk deployment web statis |

---

## 📂 Struktur Folder
│

├── index.html # Dashboard utama

├── create_tiket.html # Form pembuatan tiket

├── daftar_tiket.html # Tabel daftar tiket

├── agents.html # Manajemen agent

├── my_account.html # Profil pengguna

├── create_account.html # Form pembuatan akun

├── settings.html # Pengaturan aplikasi

├── login.html # Halaman login

├── forgot_password.html # Lupa password


├── css/

└── style.css # File gaya utama

├── js/

├── sidebar.js # Logika sidebar & toggle state

│
├── submit_form.js # Logika form & animasi submit

│
└── chart.js # Konfigurasi grafik dashboard

│
└── image/

└── icon_helpdesk.png # Logo aplikasi
