import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
        " Manga My hero Academia",
        // ... (tus nombres de productos aquí)
    ];

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<Product[]>('assets/products-small.json');
    }

    getProducts() {
        return this.http.get<Product[]>('assets/products.json');
    }

    getProductsWithOrdersSmall() {
        return this.http.get<Product[]>('assets/products-orders-small.json');
    }




    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}