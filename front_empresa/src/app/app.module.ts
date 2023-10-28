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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent
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
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
