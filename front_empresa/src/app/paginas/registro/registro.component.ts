import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  mostrarErrorCampos = false;

  public registroForm = new FormGroup({
    nombres: new FormControl(null,[Validators.required]),
    apellido_paterno: new FormControl(null,[Validators.required]),
    apellido_materno: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
  });



  constructor(private registroService: RegistroService, private router: Router) { }

  registroBoton(form: any) {
    console.log('Valores del formulario:', this.registroForm.value);

  
  
    this.registroService.registro(this.registroForm.value).subscribe(
      (res) => {
        this.router.navigate(['/inicio']);
      },
      (error) => {
        console.error('Error al registrarse:', error);
        console.log('intenta otra vez');
        console.log('Valores del formulario:', this.registroForm.value);
        this.mostrarErrorCampos = true;
      }
    );
  }
  





}
