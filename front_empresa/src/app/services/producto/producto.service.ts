import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}producto/productos/`);
  }

  postProducto(productoForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}producto/productos/`, 
      productoForm     
    );
  }
  

  getCategoria(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}producto/categoria/`);
  }
  getGenero(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}producto/generos/`);
  }

}
