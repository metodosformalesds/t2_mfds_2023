import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fantasia-libros',
  templateUrl: './fantasia-libros.component.html',
  styleUrls: ['./fantasia-libros.component.scss']
})
export class FantasiaLibrosComponent {
  productos: any[]= [];

  constructor(private route: ActivatedRoute, private productoService: ProductoService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const generoId = +params['id'];
      this.productoService.getProductosPorGenero(1).subscribe(
        productos => {
          this.productos = productos;
        },
        error => {
          console.error('Error obteniendo productos por género', error);
          // Manejar el error según tus necesidades
        }
      );
    });
  }

  verDetalle(id: number): void {
    // Navegar a la página de detalles del producto con el id del producto
    this.router.navigate(['/detalle-producto', id]);
  }
}
