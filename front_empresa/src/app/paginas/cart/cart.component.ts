import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    datos = [
      
      { id: 2, nombre: 'Elemento 2' },
      { id: 3, nombre: 'Elemento 3' },
    ];
  
    borrarElemento(id: number): void {
      this.datos = this.datos.filter(elemento => elemento.id !== id);
    }
  }

