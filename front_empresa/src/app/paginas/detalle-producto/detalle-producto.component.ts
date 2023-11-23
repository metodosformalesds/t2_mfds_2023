import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productoId = +params['id'];
      this.productoService.getProducto(productoId).subscribe(
        producto => {
          this.producto = producto;
        },
        error => {
          console.error('Error obteniendo detalles del producto', error);
          // Puedes manejar el error de alguna manera (por ejemplo, redirigir a una página de error)
        }
      );
    });
  }
}
