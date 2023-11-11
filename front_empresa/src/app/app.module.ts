//ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//COMPONENTES

import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';


//PRIMENG MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MisvisComponent } from './paginas/misvis/misvis.component';
import { ComoVendoComponent } from './paginas/como-vendo/como-vendo.component';
import { ComoComprarComponent } from './paginas/como-comprar/como-comprar.component';
import { PoliticaDeDevolucionesComponent } from './paginas/politica-de-devoluciones/politica-de-devoluciones.component';
import { PreguntasFrecuentesComponent } from './paginas/preguntas-frecuentes/preguntas-frecuentes.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { TerminosYCondicionesComponent } from './paginas/terminos-y-condiciones/terminos-y-condiciones.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    SidebarComponent,
    FooterComponent,
    RegistroComponent,
    ContactoComponent,
    MisvisComponent,
    ComoVendoComponent,
    ComoComprarComponent,
    PoliticaDeDevolucionesComponent,
    PreguntasFrecuentesComponent,
    QuienesSomosComponent,
    TerminosYCondicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenuModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
