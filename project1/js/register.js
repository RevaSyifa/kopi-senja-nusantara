// Validasi dasar registrasi
document.getElementById("formDaftar").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = (id) => document.getElementById(id).value.trim();
  const pesan = document.getElementById("pesan");
  const salah = (t) => (pesan.innerHTML = `<div class="alert alert-danger">${t}</div>`);
  if (!v("nama") || !v("email") || !v("username") || !v("password") || !v("konfirmasi")) salah("Semua kolom wajib diisi");
  else if (!/^\S+@\S+\.\S+$/.test(v("email"))) salah("Format email tidak valid");
  else if (v("password").length < 5) salah("Password minimal 5 karakter");
  else if (v("password") !== v("konfirmasi")) salah("Konfirmasi password tidak sama");
  else location.href = "login.html?daftar=ok";
});
