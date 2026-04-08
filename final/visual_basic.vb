Module Program
    Sub Main()
        Dim menu As String() = {"Lihat Katalog", "Pesan Produk", "Riwayat Pembelian", "Keluar"}
        
        For i As Integer = 0 To menu.Length - 1
            Console.WriteLine($"{i + 1}. {menu(i)}")
        Next
    End Sub
End Module