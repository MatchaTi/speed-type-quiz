from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/status")
def status():
    return {"status": "aktif", "layanan": "penjualan"}


@app.get("/produk/{id}")
def get_produk(id: int):
    if id <= 0:
        raise HTTPException(status_code=400, detail="id tidak valid")
    return {"id": id, "nama": "Laptop", "harga": 12000000}
