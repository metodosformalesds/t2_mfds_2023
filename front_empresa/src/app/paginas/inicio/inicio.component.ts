import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  products: any[] = [];

  constructor (private producto:ProductoService) {}

  ngOnInit() {
    this.producto.joyotas().subscribe(data => {
      this.products = data;
    });
  }

}
