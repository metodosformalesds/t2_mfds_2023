import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';

@Component({
  selector: 'app-mi-balance',
  templateUrl: './mi-balance.component.html',
  styleUrls: ['./mi-balance.component.scss']
})
export class MiBalanceComponent {

  products: Product[] = [];
  // cols: cols[]= [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //  this.productService.getProductsSmall().then(data => this.products = data);

    // this.cols = [
    //   { field: 'code', header: 'Code' },
    //   { field: 'name', header: 'Name' },
    //   { field: 'category', header: 'Category' },
    //   { field: 'quantity', header: 'Quantity' }
    // ];
  }
}
