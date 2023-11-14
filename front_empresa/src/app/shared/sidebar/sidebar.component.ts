import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  itemsUser!: MenuItem[];

  value: string | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.itemsUser = [
      {label: 'Ver Perfil'},
      {label:'Mi balance',command: () => this.navegar('/mi-balance')},
      {label:'Configuracion'},
      {label:'Salir'}
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
