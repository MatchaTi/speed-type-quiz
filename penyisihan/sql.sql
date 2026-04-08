SELECT judul, pengarang, tahun_terbit, stok
FROM buku
WHERE kategori = 'pemrograman'
ORDER BY tahun_terbit DESC
LIMIT 10;