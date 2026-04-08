nama_siswa = ["Wandi", "Budi", "Citra", "Dika"]
has_lolos = [x.upper() for x in nama_siswa]
yang_lulus = {f"{i+1}": nama for i, nama in enumerate(has_lolos)}

for no, nama_sb in yang_lulus.items():
    print(f"{no}. {nama_sb}")
