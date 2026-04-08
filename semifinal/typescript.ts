type Produk = { nama: string; harga: number };

const filterMurah = (produk: Produk[], max: number): Produk[] => {
  return produk.filter(p => p.harga <= max).sort((a, b) => a.harga - b.harga);
};

console.log(filterMurah([{ nama: "Mouse", harga: 150000 }, { nama: "Keyboard", harga: 800000 }], 500000));