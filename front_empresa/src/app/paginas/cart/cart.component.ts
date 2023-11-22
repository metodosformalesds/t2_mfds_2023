import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-cart',
 templateUrl: './cart.component.html',
 styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 productos: any[] = [];
 total: number = 0;

 constructor() { }

 ngOnInit(): void {
 }
 
 agregarAlCarrito(producto: any): void {
  let indice = this.productos.findIndex(p => p.id === producto.id);
  if (indice !== -1) {
    this.productos[indice].cantidad++;
  } else {
    producto.cantidad = 1;
    this.productos.push(producto);
  }
  this.calcularTotal();
}


eliminarDelCarrito(producto: any): void {
  let indice = this.productos.findIndex(p => p.id === producto.id);
  if (indice !== -1) {
    this.productos.splice(indice, 1);
  }
  this.calcularTotal();
}

calcularTotal(): void {
  this.total = this.productos.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
}
}
