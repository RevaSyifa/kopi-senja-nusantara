// REST API CRUD untuk data informasi Kopi Senja Nusantara
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const FILE = path.join(__dirname, "data", "dummy.json");
let data = JSON.parse(fs.readFileSync(FILE, "utf8")); // data in-memory
const simpan = () => fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
const WAJIB = ["judul", "kategori", "ringkasan", "deskripsiLengkap"];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ pesan: "API Kopi Senja Nusantara", endpoint: "/api/informasi" }));

// READ semua
app.get("/api/informasi", (req, res) => res.status(200).json(data));

// READ satu
app.get("/api/informasi/:id", (req, res) => {
  const item = data.find((d) => d.id === Number(req.params.id));
  if (!item) return res.status(404).json({ pesan: "Data tidak ditemukan" });
  res.status(200).json(item);
});

// CREATE
app.post("/api/informasi", (req, res) => {
  const kosong = WAJIB.filter((f) => !req.body || !String(req.body[f] || "").trim());
  if (kosong.length) return res.status(400).json({ pesan: "Field wajib diisi", field: kosong });
  const baru = {
    id: data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1,
    judul: req.body.judul,
    kategori: req.body.kategori,
    ringkasan: req.body.ringkasan,
    deskripsiLengkap: req.body.deskripsiLengkap,
    gambar: req.body.gambar || "https://placehold.co/600x400/5A3A24/FBF4EA?text=Kopi+Senja",
  };
  data.push(baru);
  simpan();
  res.status(201).json(baru);
});

// UPDATE
app.put("/api/informasi/:id", (req, res) => {
  const item = data.find((d) => d.id === Number(req.params.id));
  if (!item) return res.status(404).json({ pesan: "Data tidak ditemukan" });
  const kosong = WAJIB.filter((f) => req.body && f in req.body && !String(req.body[f]).trim());
  if (kosong.length) return res.status(400).json({ pesan: "Field tidak boleh kosong", field: kosong });
  [...WAJIB, "gambar"].forEach((f) => { if (req.body && req.body[f] !== undefined) item[f] = req.body[f]; });
  simpan();
  res.status(200).json(item);
});

// DELETE
app.delete("/api/informasi/:id", (req, res) => {
  const i = data.findIndex((d) => d.id === Number(req.params.id));
  if (i === -1) return res.status(404).json({ pesan: "Data tidak ditemukan" });
  const [hapus] = data.splice(i, 1);
  simpan();
  res.status(200).json({ pesan: "Data berhasil dihapus", data: hapus });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API berjalan di http://localhost:${PORT}`));
