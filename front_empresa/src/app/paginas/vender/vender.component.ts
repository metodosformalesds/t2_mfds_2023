import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUpload, FileUploadEvent } from 'primeng/fileupload';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';


// interface ProductData {
//   nombre: string | null;
//   precio: number | null;
//   descripcion: string | null;
//   imagen: File | null;
//   categoria: number | null; // Ajusta el tipo según tus necesidades
//   genero: number | null; // Ajusta el tipo según tus necesidades
// }

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss'],
  providers:[HttpClientModule,MessageService]
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
    genero: new FormControl(null, [Validators.required])
  });

  constructor(private productoService: ProductoService, private messageService: MessageService) {
 
  }

 

  onImageSelect(event: any) {
    const file = event.files[0];
    this.productForm.patchValue({ imagen: file });
    console.log('evento de onImageSelect',event);
    

    // Puedes agregar aquí lógica adicional, como mostrar una vista previa de la imagen si lo deseas
  }

  // onUpload(event: FileUploadEvent) {
  //   console.log('Upload Event:', event);
  //   for (const file of event.files) {
  //     this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: file.name });
  //   }
    
    
  // }

  ngOnInit(): void {
    
    this.verCategorias();
    this.verGeneros();
  }

  uploadFile(event:any) {
    const file = event.files[0];
    console.log('Contenido de la variable file:', file);
    this.productForm.patchValue({ imagen: file });
    
    
  }

  botonProducto(form:any) {
    this.fileUpload?.upload();
      console.log('Boton funciona',this.productForm.value);
    
      console.log('cat_cambiado',this.productForm.value);

      if (this.productForm.valid) {

        
        
        const formData = new FormData();

  // Agrega los campos al FormData
  formData.append('nombre', this.productForm.value.nombre || '');
  formData.append('precio', this.productForm.value.precio || '');
  formData.append('descripcion', this.productForm.value.descripcion || '');

  // Convierte los valores de categoria y genero a número antes de agregarlos al FormData
  formData.append('categoria', (this.getSelectedCategoryId() || 0).toString());
  formData.append('genero', (this.getSelectedGenreId() || 0).toString());

  // Agrega la imagen al FormData
  const imagen:any = this.productForm.value.imagen;
  if (imagen instanceof File) {
    formData.append('imagen', imagen);
  }
        
        console.log(formData);
        
        // Llama al servicio para realizar la solicitud POST
        this.productoService.postProducto(formData).subscribe(
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

  // Agrega un método para obtener solo el ID de la categoría
  getSelectedCategoryId(): number | null {
    return (this.productForm.get('categoria') as unknown as FormGroup)?.value?.id || null;
  }
  
  getSelectedGenreId() {
    return (this.productForm.get('genero') as unknown as FormGroup)?.value?.id || null;
}

// updateGenerosByCategoria() {
//   const categoriaId = this.getSelectedCategoryId();
//   const generosByCategoria = this.generos_back.filter((genero) => genero.categoria === categoriaId);
//   this.productForm.get('generos')?.setValue(generosByCategoria);
// }
  

}
