import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[] = [
    { _id: '1', name: 'Product 1', category: 'Category A', price: 100 },
    { _id: '2', name: 'Product 2', category: 'Category B', price: 450 },
  ];
  displayedColumns = ['name', 'category', 'price'];

  constructor() {}
}
