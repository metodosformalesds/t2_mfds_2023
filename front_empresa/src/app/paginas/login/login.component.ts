import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'pagina-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[HttpClientModule]
})
export class LoginComponent {

  public formLogIn = new FormGroup({
    username: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  loginboton(form: any) {

    // console.log(this.formLogIn.value);
    
    if (this.formLogIn.valid) {
      // const { username, password } = this.formLogIn.value; // Obtén los valores del formulario
      // console.log('Valor de username:', username);
      // console.log('Valor de password:', password);
      
      console.log('Valores del formulario:', this.formLogIn.value);
      this.loginService.login(this.formLogIn.value).subscribe(
        (response) => {
          const accessToken = response.access;
          const refreshToken = response.refresh;
         console.log('funciona');
          
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('refresh_token', refreshToken);
  
         
         
          this.router.navigate(['/inicio']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          console.log('intenta otra vez');
          console.log('Valores del formulario:', this.formLogIn.value);
          
          
       
        }
      );
    }
  }

  validacion_datos_usuario(formControl:any, tipo_validacion:any) {
    return this.formLogIn.get(`${formControl}`)?.errors?.[tipo_validacion]  && 
    (this.formLogIn.get(`${formControl}`)?.dirty || 
    this.formLogIn.get(`${formControl}`)?.touched);
  }


}
