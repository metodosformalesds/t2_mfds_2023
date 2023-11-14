import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  itemsUser!: MenuItem[];

  value: string | undefined;

  constructor(private router: Router, usuario:RegistroService) { }

  ngOnInit() {
    this.itemsUser = [
      {label: 'Ver Perfil'},
      {label:'Mi balance',command: () => this.navegar('/mi-balance')},
      {label:'Configuracion'},
      {label:'Iniciar sesion',command: () => this.navegar('/login')}
    ]
  }


  items: any[] = [
    { label: 'Libros',  routerLink: '/clasicos-libros' },
    { label: 'Comics',  routerLink: '/comedia-comics' },
    { label: 'Mangas',  routerLink: '/shojo' }
  ];

  private navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }
}
