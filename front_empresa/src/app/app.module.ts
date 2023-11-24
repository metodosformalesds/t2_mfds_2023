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
import { MiBalanceComponent } from './paginas/mi-balance/mi-balance.component';
import { FantasiaLibrosComponent } from './paginas/fantasia-libros/fantasia-libros.component';
import { ClasicosLibrosComponent } from './paginas/clasicos-libros/clasicos-libros.component';
import { RomanceLibrosComponent } from './paginas/romance-libros/romance-libros.component';
import { HispanoamericanosLibrosComponent } from './paginas/hispanoamericanos-libros/hispanoamericanos-libros.component';
import { RomanceComicComponent } from './paginas/romance-comic/romance-comic.component';
import { BelicaComicComponent } from './paginas/belica-comic/belica-comic.component';
import { KodomoComponent } from './paginas/kodomo/kodomo.component';
import { ShonenComponent } from './paginas/shonen/shonen.component';
import { ShojoComponent } from './paginas/shojo/shojo.component';
import { SeinenComponent } from './paginas/seinen/seinen.component';
import { VenderComponent } from './paginas/vender/vender.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {MultiSelectModule} from 'primeng/multiselect';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { AventuraComicComponent } from './paginas/aventura-comic/aventura-comic.component';
import { ComediaComicComponent } from './paginas/comedia-comic/comedia-comic.component';
import { CartComponent } from './paginas/cart/cart.component';
import { PagoComponent } from './paginas/pago/pago.component';





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
    TerminosYCondicionesComponent,
    MiBalanceComponent,
    FantasiaLibrosComponent,
    ClasicosLibrosComponent,
    RomanceLibrosComponent,
    HispanoamericanosLibrosComponent,
    RomanceComicComponent,
    BelicaComicComponent,
    KodomoComponent,
    ShonenComponent,
    ShojoComponent,
    SeinenComponent,
    VenderComponent,
    UsuarioComponent,
    AventuraComicComponent,
    ComediaComicComponent,
    CartComponent,
    PagoComponent
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
    MenuModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    FileUploadModule,
    MultiSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
