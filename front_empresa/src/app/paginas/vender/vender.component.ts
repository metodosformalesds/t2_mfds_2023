import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss'],
  providers:[HttpClientModule]
})
export class VenderComponent {
  @ViewChild('fileUpload') fileUpload?: FileUpload;
  categorias: any[] = [];
  generos_back:any[] =[];
  uploadedFiles: any[] = [];

  public productForm = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    precio: new FormControl(null, [Validators.required]),
    descripcion: new FormControl(null, [Validators.required]),
    imagen: new FormControl(null, [Validators.required]),
    categoria: new FormControl(null, [Validators.required]),
    generos: new FormControl([], [Validators.required])
  });

  constructor(private productoService: ProductoService) {
 
  }

  ngOnInit(): void {
    
    this.verCategorias();
    this.verGeneros();
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

      if (this.productForm.valid) {
        // Llama al servicio para realizar la solicitud POST
        this.productoService.postProducto(this.productForm.value).subscribe(
          (response) => {
            // Maneja la respuesta aquí, por ejemplo, muestra un mensaje de éxito
            console.log('Solicitud POST exitosa:', response);
          },
          (error) => {
            // Maneja cualquier error que ocurra durante la solicitud
            console.error('Error en la solicitud POST:', error);
          }
        );
      } else {
        // Maneja el caso en que el formulario no sea válido
        console.log('El formulario no es válido. Por favor, completa todos los campos.');
      }

     
      
      
  }


  verCategorias() {
    this.productoService.getCategoria().subscribe((res)=>{
    this.categorias=res
    console.log(this.categorias);
    })
  }

  verGeneros() {
    this.productoService.getGenero().subscribe((res)=>{
      this.generos_back=res;
      console.log(res);
      
    })
  }

  

}
