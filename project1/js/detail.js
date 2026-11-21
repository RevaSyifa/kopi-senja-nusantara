// Baca id dari URL lalu tampilkan detailnya
const id = Number(new URLSearchParams(location.search).get("id"));
const d = dataInformasi.find((x) => x.id === id);
const isi = document.getElementById("isi");
if (d) {
  isi.innerHTML = `<a href="index.html" class="btn btn-outline-kopi btn-sm mb-3"><i class="bi bi-arrow-left"></i> Kembali</a>
    <div class="row g-4"><div class="col-md-6"><img src="${d.gambar}" class="img-fluid rounded" alt="${d.judul}"></div>
    <div class="col-md-6"><span class="badge badge-kopi mb-2">${d.kategori}</span><h1>${d.judul}</h1><p class="mt-3">${d.deskripsiLengkap}</p></div></div>`;
} else {
  isi.innerHTML = `<div class="text-center py-5"><h2>Informasi tidak ditemukan</h2><p>Pilih salah satu informasi dari halaman utama.</p><a href="index.html" class="btn btn-karamel">Ke halaman utama</a></div>`;
}
