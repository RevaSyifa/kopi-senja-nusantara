// Tampilkan kartu informasi dari data.js
const daftar = document.getElementById("daftar");
dataInformasi.forEach((d) => {
  daftar.insertAdjacentHTML("beforeend", `
    <div class="col-md-6 col-lg-4"><div class="card-kopi d-flex flex-column">
      <img src="${d.gambar}" alt="${d.judul}">
      <div class="p-3 d-flex flex-column flex-grow-1">
        <span class="badge badge-kopi align-self-start mb-2">${d.kategori}</span>
        <h5>${d.judul}</h5><p class="small flex-grow-1">${d.ringkasan}</p>
        <a href="detail.html?id=${d.id}" class="btn btn-outline-kopi btn-sm">Lihat Detail</a>
      </div></div></div>`);
});
