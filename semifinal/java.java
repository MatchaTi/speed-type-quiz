class User {
  static String getRole(String level) {
    switch (level.toLowerCase()) {
      case "admin": return "Kelola Semua";
      case "editor": return "Edit Konten";
      case "viewer": return "Baca Saja";
      default: return "Tidak Dikenal";
    }
  }

  public static void main(String[] args) {
    System.out.println(getRole("editor"));
  }
}