def pisahkan_nama(nama_lengkap):
    nama = nama_lengkap.strip().split()
    depan = nama[0]
    belakang = " ".join(nama[1:]) if len(nama) > 1 else ""
    return depan, belakang


pd, pb = pisahkan_nama("  Adi Pratama  ")
print(f"Depan: {pd}, Belakang: {pb}")
