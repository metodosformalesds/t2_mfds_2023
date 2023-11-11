import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MisvisComponent } from './paginas/misvis/misvis.component';
import { ComoComprarComponent } from './paginas/como-comprar/como-comprar.component';
import { ComoVendoComponent } from './paginas/como-vendo/como-vendo.component';
import { PreguntasFrecuentesComponent } from './paginas/preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaDeDevolucionesComponent } from './paginas/politica-de-devoluciones/politica-de-devoluciones.component';
import { TerminosYCondicionesComponent } from './paginas/terminos-y-condiciones/terminos-y-condiciones.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';

const routes: Routes = [

 {path:'login',component:LoginComponent},
 {path:'inicio',component:InicioComponent},
 {path:'contacto',component:ContactoComponent},
 {path:'misvis',component:MisvisComponent},
 {path:'como-comprar',component:ComoComprarComponent},
 {path:'como-vendo',component:ComoVendoComponent},
 {path:'preguntas-frecuentes',component:PreguntasFrecuentesComponent},
 {path:'politica-de-devoluciones',component:PoliticaDeDevolucionesComponent},
 {path:'terminos-y-condiciones',component:TerminosYCondicionesComponent},
 {path:'quienes-somos',component:QuienesSomosComponent},

 { path: '', redirectTo: 'inicio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
