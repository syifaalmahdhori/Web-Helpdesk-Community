document.querySelector('.dropdown-item[href="login.html"]').addEventListener('click', function(e) {
  e.preventDefault();
  // Hapus data sesi (dummy)
  localStorage.clear();
  sessionStorage.clear();
  // Redirect ke halaman login
  window.location.href = 'login.html';
});
