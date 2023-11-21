import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss']
})
export class VenderComponent {
  @ViewChild('fileUpload') fileUpload?: FileUpload;

  uploadedFiles: any[] = [];

  public productForm = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    precio: new FormControl(null, [Validators.required]),
    descripcion: new FormControl(null, [Validators.required]),
    imagen: new FormControl(null, [Validators.required]),
    categoria: new FormControl('prueba', [Validators.required]),
    generos: new FormControl('prueba', [Validators.required])
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  uploadFile(event:any) {
    for (let file of event.files) {
      this.productForm.patchValue({ imagen: file });
      this.productForm.get('imagen')?.updateValueAndValidity();
    }
  }

  botonProducto(form:any) {
    this.fileUpload?.upload();
      console.log('Boton funciona',this.productForm.value);

     
      
      
  }


  

}
