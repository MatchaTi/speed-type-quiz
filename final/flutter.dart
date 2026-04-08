import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  final String name;
  final int price;

  const ProductCard({super.key, required this.name, required this.price});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(name),
        subtitle: Text('Rp $price'),
        trailing: ElevatedButton(
          onPressed: () {},
          child: const Text('Beli'),
        ),
      ),
    );
  }
}