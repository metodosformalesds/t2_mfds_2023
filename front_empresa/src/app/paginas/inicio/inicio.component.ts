import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  products: any[] = [];

  constructor (private producto:ProductoService, private router:Router) {}

  ngOnInit() {
    this.producto.joyotas().subscribe(data => {
      this.products = data;
    });
  }

  verDetalle(id: number): void {
    // Navegar a la página de detalles del producto con el id del producto
    this.router.navigate(['/detalle-producto', id]);
  }

}
