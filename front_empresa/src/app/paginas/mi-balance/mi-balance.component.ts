import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el ID del balance desde la URL
import { BalanceService } from './balance.service';
import { LoginService } from 'src/app/services/login.service';

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
 balanceId: any;
 historial: any[]= [];

 constructor( private balanceService: BalanceService,    private loginService: LoginService,
   private route: ActivatedRoute) { }


 ngOnInit(): void {
  

    // Llama a la función getHistorial() del servicio para obtener el historial
    this.balanceService.getHistorial(1).subscribe(data => {
      this.historial = data;
      console.log(this.historial);
      
    });
 }
 cobrar(): void {
  // Aquí  implementar la lógica para cobrar
}

pendientes(): void {
  // Aquí  implementar la lógica para mostrar las transacciones pendientes
}
}
