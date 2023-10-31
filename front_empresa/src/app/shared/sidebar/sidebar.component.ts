import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  value: string | undefined;


  items: any[] = [
    { label: 'Libros',  routerLink: '/' },
    { label: 'Comics',  routerLink: '/profile' },
    { label: 'Mangas',  routerLink: '/settings' }
  ];
}
