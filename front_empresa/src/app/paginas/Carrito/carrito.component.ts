import { Component } from '@angular/core';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  constructor(public carritoService: carritoService) {}

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarDelCarrito(index);
  }

  calcularTotal() {
    return this.carritoService.calcularTotal();
  }
}
