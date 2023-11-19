import { Component } from '@angular/core';
import {MenuItemContent, MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { jwtDecode } from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  mensaje: string = '';
  isAuthenticated: boolean = this.login.isAuthenticated();
   usuario:any;

   itemsUser!: MenuItem[];

  value: string | undefined;

  constructor(private router: Router, usuario:RegistroService, private login:LoginService) { }
  items: any[] = [
    {
      label: 'Libros',
      items: [
        { label: 'Fantasia', routerLink: '/shojo' },
        { label: 'Clasicos', routerLink: '/shonen' },
        { label: 'Romance', routerLink: '/seinen' },
        { label: 'Hispanohablantes', routerLink: '/seinen' }
      ]
    },
    {
      label: 'Comics',
      items: [
        { label: 'Superhéroes', routerLink: '/superheroes' },
        { label: 'Comedia', routerLink: '/comedia' },
        { label: 'Ciencia Ficción', routerLink: '/ciencia-ficcion' }
      ]
    },
    {
      label: 'Libros',
      items: [
        { label: 'Ficción', routerLink: '/ficcion' },
        { label: 'No Ficción', routerLink: '/no-ficcion' },
        { label: 'Misterio', routerLink: '/misterio' }
      ]
    },
  ];
  ngOnInit() {

    // this.getUserInfo();
    if(this.login.isAuthenticated()){
      const user = this.login.getUserInfo();
      this.mensaje=`Hola, ${user.user_id}`;

    }

    this.itemsUser = [
      {label: 'Ver Perfil'},
      {label:'Mi balance',command: () => this.navegar('/mi-balance')},
      {label:'Configuracion'},
      {
        label: this.isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión',
        command: () => {
          if (this.isAuthenticated) {
            // Cerrar sesión
            this.login.logout();
            this.navegar('/inicio');
            window.location.reload();
            // Puedes redirigir a la página de inicio o hacer otras acciones necesarias
          } else {
            // Iniciar sesión
            this.navegar('/login');
          }
        }
      }
    ]
  }



  
  

  private navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }
  // getUserInfo(): any {
  //   console.log('inicio formulario');
  //   const accessToken = localStorage.getItem('access_token');

  //   if (accessToken) {
  //     try {
  //       const decodedToken = jwtDecode(accessToken);
  //       console.log(decodedToken);
  //       this.usuario = decodedToken;
  //       return decodedToken;
  //     } catch (error) {
  //       console.error('Error al decodificar el token:', error);
  //     }
  //   }

  //   return null;
  // }

  // isAuthenticated(): boolean {
  //   const accessToken = localStorage.getItem('access_token');
  //   // Aquí puedes realizar más validaciones según tus necesidades (por ejemplo, verificar si el token ha expirado)
  //   return !!accessToken;
  // }

}
