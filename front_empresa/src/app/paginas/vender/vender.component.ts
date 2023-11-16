import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss']
})
export class VenderComponent {

  uploadedFiles: any[] = [];

  public productForm = new FormGroup({
    nombres: new FormControl(null, [Validators.required]),
    apellido_paterno: new FormControl(null, [Validators.required]),
    apellido_materno: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    generos: new FormControl(null, [Validators.required])
  });


}
