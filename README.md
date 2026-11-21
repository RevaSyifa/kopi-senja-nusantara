# Kopi Senja Nusantara

Tugas Project 1 dan Project 2 oleh **Reva Syifa Tamara** (NIM 24552011342, kelas TIF RP 24E CNS).

- **Project 1**: website kedai kopi dengan Bootstrap 5 (HTML, CSS, JavaScript).
- **Project 2**: REST API CRUD dengan Node.js dan Express, memakai data dummy dari Project 1.

## Struktur folder

```
kopi-senja-nusantara/
├── README.md
├── docs/screenshots/        (gambar untuk README)
├── project1/
│   ├── index.html, detail.html, login.html, register.html, menu.html
│   ├── css/style.css
│   └── js/ (data.js, index.js, detail.js, login.js, register.js, menu.js)
└── project2/
    ├── server.js, package.json
    ├── data/dummy.json
    └── bruno/               (koleksi request Bruno)
```

## Cara menjalankan

### Project 1

1. Buka folder `project1` di VSCode.
2. Klik kanan `index.html`, pilih **Open with Live Server** (atau buka file langsung di browser).
3. Akun dummy untuk login: username `admin`, password `12345`.

### Project 2

```bash
cd project2
npm install
npm start
```

API berjalan di `http://localhost:3000`.

## Endpoint API

| Method | Endpoint | Keterangan | Status |
|---|---|---|---|
| GET | `/api/informasi` | Ambil semua data | 200 |
| GET | `/api/informasi/:id` | Ambil satu data | 200, 404 |
| POST | `/api/informasi` | Tambah data | 201, 400 |
| PUT | `/api/informasi/:id` | Ubah data | 200, 400, 404 |
| DELETE | `/api/informasi/:id` | Hapus data | 200, 404 |

Field data: `id`, `judul`, `kategori`, `ringkasan`, `deskripsiLengkap`, `gambar`.

## Screenshot Project 1

### Halaman Utama
![Halaman Utama](docs/screenshots/beranda.png)

### Halaman Detail Informasi
![Halaman Detail](docs/screenshots/detail.png)

### Halaman Login
![Halaman Login](docs/screenshots/login.png)

### Halaman Registrasi
![Halaman Registrasi](docs/screenshots/register.png)

### Halaman Menu Utama
![Halaman Menu Utama](docs/screenshots/menu.png)

## Hasil uji API Project 2 (Bruno)

### GET semua data
![GET semua data](docs/screenshots/get-all.png)

### GET satu data
![GET satu data](docs/screenshots/get-by-id.png)

### POST tambah data
![POST tambah data](docs/screenshots/post.png)

### PUT ubah data
![PUT ubah data](docs/screenshots/put.png)

### DELETE hapus data
![DELETE hapus data](docs/screenshots/delete.png)

---

@Copyright by 24552011342_REVA SYIFA TAMARA TIF RP 24E CNS
