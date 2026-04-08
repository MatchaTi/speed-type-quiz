fn deskripsi_role(role: &str) -> &'static str {
  match role {
    "admin" => "kelola sistem",
    "editor" => "ubah konten",
    "viewer" => "lihat konten",
    _ => "role tidak ada",
  }
}

fn main() {
  println!("{}", deskripsi_role("editor"));
}