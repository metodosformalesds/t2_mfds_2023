
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-usuario',
 templateUrl: './usuario.component.html',
 styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
 fotoPerfil = 'assets/imagenes/Login/perfil.webp';
 fotoPortada = 'assets/imagenes/Login/portada.jpeg';

 constructor() { }

 ngOnInit(): void {
 }
}