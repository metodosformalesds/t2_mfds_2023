import { Component, OnInit } from '@angular/core';

export class Accion {
 constructor(
    public nombre: string,
    public precio: number,
    public cantidad: number
 ) {}
}

@Component({
 selector: 'app-mi-balance',
 templateUrl: './mi-balance.component.html',
 styleUrls: ['./mi-balance.component.scss']
})
export class MiBalanceComponent implements OnInit {
 acciones: Accion[] = [];
 saldo: number = 0; // Aquí se  inicializa el saldo con los valores de tus compras y ventas

 constructor() { }


 ngOnInit(): void {
    // ...
 }
 cobrar(): void {
  // Aquí  implementar la lógica para cobrar
}

pendientes(): void {
  // Aquí  implementar la lógica para mostrar las transacciones pendientes
}
}
