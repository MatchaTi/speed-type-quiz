#include <iostream>
#include <vector>
#include <string>

int main() {
  std::vector<std::string> produk = {"Laptop", "Mouse", "Keyboard"};
  
  for (int i = 0; i < produk.size(); i++) {
    std::cout << (i + 1) << ". " << produk[i] << "\n";
  }
}