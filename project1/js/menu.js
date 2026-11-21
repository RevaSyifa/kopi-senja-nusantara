// Halaman menu hanya untuk yang sudah login
const user = sessionStorage.getItem("login");
if (!user) location.href = "login.html";
document.getElementById("nama").textContent = user;
document.getElementById("sapaan").textContent = "Halo, " + user;
document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("login");
  location.href = "login.html";
});
