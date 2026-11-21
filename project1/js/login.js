// Validasi login memakai percabangan if / else if / else
const USER_DUMMY = "admin", PASS_DUMMY = "12345";
const pesan = document.getElementById("pesan");
const tampil = (tipe, teks) => (pesan.innerHTML = `<div class="alert alert-${tipe}">${teks}</div>`);
document.getElementById("formLogin").addEventListener("submit", (e) => {
  e.preventDefault();
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value;
  if (u === "" || p === "") {
    tampil("warning", "Username dan password wajib diisi");
  } else if (u === USER_DUMMY && p === PASS_DUMMY) {
    sessionStorage.setItem("login", u);
    location.href = "menu.html";
  } else {
    tampil("danger", "Username atau password salah");
  }
});
if (new URLSearchParams(location.search).get("daftar") === "ok") tampil("success", "Registrasi berhasil. Silakan login.");
