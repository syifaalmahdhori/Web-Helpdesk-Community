// sidebar.js

// Ambil elemen
const sidebar = document.getElementById('sidebarMenu');
const content = document.getElementById('mainContent');
const navbar = document.getElementById('mainNavbar');
const toggleBtn = document.getElementById('sidebarToggle');

// Set status sidebar sesuai localStorage
function setSidebarState() {
    if (localStorage.getItem('sidebarOpen') === 'true') {
        if (sidebar) sidebar.classList.add('show');
        if (content) content.classList.add('shift');
        if (navbar) navbar.classList.add('shift');
    }
}

// Jalankan saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', setSidebarState);

// Toggle sidebar dengan tombol burger
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        if (sidebar) sidebar.classList.toggle('show');
        if (content) content.classList.toggle('shift');
        if (navbar) navbar.classList.toggle('shift');

        // Animasi rotasi kecil untuk burger
        toggleBtn.style.transition = "transform 0.3s ease";
        toggleBtn.style.transform = sidebar.classList.contains('show') ? "rotate(90deg)" : "rotate(0deg)";

        // Simpan status sidebar di localStorage
        localStorage.setItem('sidebarOpen', sidebar.classList.contains('show'));
    });
}
